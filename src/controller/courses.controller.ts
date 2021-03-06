import { Controller, Param, Body, Get, Post, Delete, Put, HttpCode, HttpStatus } from '@nestjs/common';
import { CreateCourseDto } from 'src/dto/create-course.dto';
import { UpdateCourseDto } from 'src/dto/update/update-course.dto';
import { CoursesService } from '../service/courses.service';

// Body: src/courses/courses.controller.ts -> Configura o objeto com os dados do corpo da requisição;
// conter dados de um objeto; enviar dados de um formulário com 4, 5 informações que vão estar dentro de um objeto

@Controller('courses') // Endpoint (courses)
export class CoursesController {

  constructor(
    private readonly coursesService: CoursesService, // Responssável por receber a instância do nosso serviço; é um container;
  ) {}

  @Get('')
  findAll() {
    // Response é um objeto que permite que o servidor envie dados para o cliente;
    return this.coursesService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findOne(@Param(`id`) id: any) {
    return this.coursesService.findOne(id);
  }

  // @Post('') // 201 -> OK que foi criado com sucesso a informação;
  // // Estático;
  // @HttpCode(HttpStatus.NO_CONTENT) // Foi criado, mas ele não consomeu nenhum dado que foi retornado; Nenhum conteúdo no retorno;
  // create(@Body() body) {
  //   return this.coursesService.create(body);
  // }

  @Post('') // 201 -> OK que foi criado com sucesso a informação;
  // Estático;
  @HttpCode(HttpStatus.NO_CONTENT) // Foi criado, mas ele não consomeu nenhum dado que foi retornado; Nenhum conteúdo no retorno;
  create(@Body() createCourseDto: CreateCourseDto) {
    return this.coursesService.create(createCourseDto);
  }

  @Delete('')
  delete(@Param('id') id) {
    return this.coursesService.delete(id);
  }

  @Put('')
  update(@Param("id") id: number, @Body() updateCourseDto: UpdateCourseDto) {
    return this.coursesService.update(id, updateCourseDto)
  }

}

// O Nest envia resposta para requisições GET bem sucedidas com o código 200 (OK) e para requisições que falharem com o código 400 (Bad Request)