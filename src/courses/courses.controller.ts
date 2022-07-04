import { Controller, Param, Body, Get, Post, Delete, Put, HttpCode, HttpStatus, Res } from '@nestjs/common';

// Body: src/courses/courses.controller.ts -> Configura o objeto com os dados do corpo da requisição;
// conter dados de um objeto; enviar dados de um formulário com 4, 5 informações que vão estar dentro de um objeto

@Controller('courses') // Endpoint (courses)
export class CoursesController {

  @Get('')
  findAll(@Res() response): string {
    return response.Status(HttpStatus.OK).send(`This action returns all courses`);
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findOne(@Param(`id`) id): string {
    return `This action returns a #${id} course`;
  }

  @Post('') // 201 -> OK que foi criado com sucesso a informação;
  // Estático;
  @HttpCode(HttpStatus.NO_CONTENT) // Foi criado, mas ele não consomeu nenhum dado que foi retornado; Nenhum conteúdo no retorno;
  create(@Body('name') body): string {
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

// O Nest envia resposta para requisições GET bem sucedidas com o código 200 (OK) e para requisições que falharem com o código 400 (Bad Request)