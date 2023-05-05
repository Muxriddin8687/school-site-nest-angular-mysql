import { Injectable } from '@nestjs/common';
import { Connection } from 'mysql2';
import { InjectClient } from 'nest-mysql';
import * as fs from 'fs';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class GalleryService {
  imagePath = '';

  constructor (
    @InjectClient() private readonly con: Connection,
    private config: ConfigService
  ) {
    this.imagePath = config.get('imageSavePath') + "gallery/";
  }

  async create(image) {
    return await this.con.query('INSERT INTO `gallery`(`name`) VALUES(?)', [image.filename]);
  }

  async findAll() {
    const images = await this.con.query('SELECT * FROM `gallery`');
    return images[0];
  }

  async remove(fileName: String) {
    fs.unlink(this.imagePath + fileName, (err) => {
      if (err) {
        console.log(err);
        return err;
      } else {
        return this.con.query('DELETE FROM `gallery` WHERE name=?', fileName);
      }
    });
  }
}
