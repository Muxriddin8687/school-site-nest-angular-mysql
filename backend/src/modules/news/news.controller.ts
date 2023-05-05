import { Controller, Get, Post, Body, Patch, Param, UseInterceptors, Delete, Query, UploadedFile, ParseFilePipe, FileTypeValidator, MaxFileSizeValidator } from '@nestjs/common';
import { NewsService } from './news.service';
import { NewsModel } from './news.model';
import LocalFilesInterceptor from 'src/core/localFiles.interceptor';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) { }

  @Post()
  create(@Body() createNewsDto: NewsModel) {
    return this.newsService.create(createNewsDto);
  }

  @Get()
  findAll() {
    return this.newsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.newsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNewsDto: NewsModel) {
    return this.newsService.update(+id, updateNewsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Query('imageName') imageName: string) {
    return this.newsService.remove(+id, imageName);
  }



  @Post('upload/:id')
  @UseInterceptors(
    LocalFilesInterceptor({ fieldName: 'image', path: 'news/' })
  )
  upload(
    @Param('id') id: string,
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new FileTypeValidator({ fileType: '.(png|jpeg|jpg)' }),
          new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 5 }),
        ],
      })
    ) image: Express.Multer.File) {
    return this.newsService.uploadImage(image, id);
  }
}
