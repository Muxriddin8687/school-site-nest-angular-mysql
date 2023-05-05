import { Injectable } from '@nestjs/common';
import { NewsModel } from './news.model';
import { InjectClient } from 'nest-mysql';
import { Connection } from 'mysql2';
import { ConfigService } from '@nestjs/config';
import * as fs from 'fs';

@Injectable()
export class NewsService {
  imagePath = '';

  constructor(
    @InjectClient() private readonly con: Connection,
    private config: ConfigService
  ) {
    this.imagePath = config.get('imageSavePath') + "news/";
  }



  async create(data: NewsModel) {
    return this.con.query('INSERT `news`(`title`, `text`) VALUES (?, ?)', [data.title, data.text]);
  }


  async findAll() {
    const news = await this.con.query('SELECT * FROM `news` ORDER BY `date` DESC');
    return news[0];
  }


  async findOne(id: number) {
    const images = await this.con.query('SELECT * FROM `news` WHERE id=?', id);
    return images[0];
  }


  async update(id: number, data: NewsModel) {
    return await this.con
      .query('UPDATE `news` SET `title`=?, `text`=? WHERE id=?',
        [data.title, data.text, id]);
  }


  async remove(id: number, imageName: string) {
    await this.con.query('DELETE FROM `news` WHERE `id`=?', id);
    fs.unlink(this.imagePath + imageName, (err) => { });
    return true;
  }





  async uploadImage(image, id) {
    const data = await this.con.query('SELECT * FROM `news` WHERE `id`=?', id);

    if (data[0][0]['image'].length > 0) {
      const imageUrl = this.imagePath + data[0][0]['image'];

      fs.exists(imageUrl, (exist) => {
        if (exist) {
          fs.unlink(imageUrl, (err) => {
            if (err) {
              console.log(err);
              return err;
            } else {
              return this.con.query('UPDATE `news` SET `image`=? WHERE `id`=?', [image.filename, id]);
            }
          });
        } else {
          return this.con.query('UPDATE `news` SET `image`=? WHERE `id`=?', [image.filename, id]);
        }
      });
    }
    else
      return this.con.query('UPDATE `news` SET `image`=? WHERE `id`=?', [image.filename, id]);
  }
}
