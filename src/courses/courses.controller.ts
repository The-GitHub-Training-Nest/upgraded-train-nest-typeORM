import { Controller, Get } from '@nestjs/common';

@Controller('courses')
export class CoursesController {

  @Get('')
  findAll(): string {
    return 'This action returns all courses';
  }

  @Get('/:id')
  findOne(id: string): string {
    return `This action returns a #${id} course`;
  }

}
