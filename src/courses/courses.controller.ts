import { Controller, Param, Body, Get, Post, Delete, Put } from '@nestjs/common';

// Body: src/courses/courses.controller.ts -> Configura o objeto com os dados do corpo da requisição;
// conter dados de um objeto; enviar dados de um formulário com 4, 5 informações que vão estar dentro de um objeto

@Controller('courses') // Endpoint (courses)
export class CoursesController {

  @Get('')
  findAll(): string {
    return `This action returns all courses`;
  }

  @Get('/:id')
  findOne(@Param(`id`) id): string {
    return `This action returns a #${id} course`;
  }

  @Post('')
  create(@Body() body): string {
    return body;
  }

  @Delete('')
  delete(): string {
    return `This action deletes a course`;
  }

  @Put('')
  update(): string {
    return `This action updates a course`;
  }
  

}
