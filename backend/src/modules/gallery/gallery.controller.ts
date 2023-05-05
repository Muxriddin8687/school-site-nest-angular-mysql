import { Controller, Get, Post, Param, Delete, UseInterceptors, UploadedFile, ParseFilePipe, FileTypeValidator, MaxFileSizeValidator } from '@nestjs/common';
import { GalleryService } from './gallery.service';
import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';
import LocalFilesInterceptor from 'src/core/localFiles.interceptor';

@Controller('gallery')
export class GalleryController {
  multerOptions: MulterOptions;

  constructor(private readonly galleryService: GalleryService) { }


  @Post()
  @UseInterceptors(
    LocalFilesInterceptor({ fieldName: 'image', path: 'gallery/'})
  )
  create(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new FileTypeValidator({ fileType: '.(png|jpeg|jpg)' }),
          new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 5 }),
        ],
      })
    ) image: Express.Multer.File) {
    return this.galleryService.create(image);
  }

  @Get()
  findAll() {
    return this.galleryService.findAll();
  }

  @Delete(':name')
  remove(@Param('name') name: string) {
    return this.galleryService.remove(name);
  }
}
