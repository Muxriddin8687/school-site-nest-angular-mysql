import { Injectable } from '@nestjs/common';
import { ManagementModel } from './management.model';
import { InjectClient } from 'nest-mysql';
import { Connection } from 'mysql2';
import { ConfigService } from '@nestjs/config';
import * as fs from 'fs';

@Injectable()
export class ManagementService {
  imagePath = '';

  constructor(
    @InjectClient() private readonly con: Connection,
    private config: ConfigService
  ) {
    this.imagePath = config.get('imageSavePath') + "team/";
  }


  async create(data: ManagementModel) {
    return this.con.query('INSERT `team`(`fullname`, `position`, `text`) VALUES (?, ?, ?)', [data.fullname, data.position, data.text]);
  }


  async findAll() {
    const images = await this.con.query('SELECT * FROM `team`');
    return images[0];
  }


  async findOne(id: number) {
    const images = await this.con.query('SELECT * FROM `team` WHERE id=?', id);
    return images[0];
  }


  async update(id: number, data: ManagementModel) {
    return await this.con
      .query('UPDATE `team` SET `fullname`=?, `position`=?, `text`=? WHERE id=?',
        [data.fullname, data.position, data.text, id]);
  }


  async remove(id: number, imageName: string) {
    await this.con.query('DELETE FROM `team` WHERE `id`=?', id);
    fs.unlink(this.imagePath + imageName, (err) => { });
    return true;
  }



  async uploadImage(image, id) {
    const data = await this.con.query('SELECT * FROM `team` WHERE `id`=?', id);

    if (data[0][0]['image'].length > 0) {
      const imageUrl = this.imagePath + data[0][0]['image'];

      fs.exists(imageUrl, (exist) => {
        if (exist) {
          fs.unlink(imageUrl, (err) => {
            if (err) {
              console.log(err);
              return err;
            } else {
              return this.con.query('UPDATE `team` SET `image`=? WHERE `id`=?', [image.filename, id]);
            }
          });
        } else {
          return this.con.query('UPDATE `team` SET `image`=? WHERE `id`=?', [image.filename, id]);
        }
      });
    }
    else
      return this.con.query('UPDATE `team` SET `image`=? WHERE `id`=?', [image.filename, id]);
  }

}
