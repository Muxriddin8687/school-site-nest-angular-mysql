import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseInterceptors, UploadedFile, ParseFilePipe, FileTypeValidator, MaxFileSizeValidator } from '@nestjs/common';
import { ManagementService } from './management.service';
import { ManagementModel } from './management.model';
import LocalFilesInterceptor from 'src/core/localFiles.interceptor';

@Controller('team')
export class ManagementController {
  constructor(private readonly managementService: ManagementService) { }

  @Post()
  create(@Body() createManagementDto: ManagementModel) {
    return this.managementService.create(createManagementDto);
  }

  @Post('upload/:id')
  @UseInterceptors(
    LocalFilesInterceptor({ fieldName: 'image', path: 'team/' })
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
    return this.managementService.uploadImage(image, id);
  }


  @Get()
  findAll() {
    return this.managementService.findAll();
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.managementService.findOne(+id);
  }


  @Patch(':id')
  update(@Param('id') id: string, @Body() updateManagementDto: ManagementModel) {
    return this.managementService.update(+id, updateManagementDto);
  }


  @Delete(':id')
  remove(@Param('id') id: string, @Query('imageName') imageName: string) {
    return this.managementService.remove(+id, imageName);
  }
}
