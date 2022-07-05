import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundError } from 'rxjs';
import { CreateCourseDto } from 'src/dto/create-course.dto';
import { Course } from 'src/entities/course.entity';
import { Repository } from 'typeorm';

@Injectable() // uma instância sendo injetada em outra classe, no contrutor do controller; para que o serviço possa ser utilizado com os métodos a serem utilizados;
export class CoursesService {

  constructor (
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>,
  ) {}

  // registro pré-definido;
  private courses: Course[] = [
    { id: 1, name: 'course1', description: 'course1 description', tags: ['tag1', 'tag2'] },
    { id: 2, name: 'course2', description: 'course2 description', tags: ['tag1', 'tag2'] },
    { id: 3, name: 'course3', description: 'course3 description', tags: ['tag1', 'tag2'] },
  ];

  // Métodos que irão manipular a estrutura de dados acima;
  // Regras de negócio;

  // Método que retorna todos os cursos;
  findAll() {
    return this.courseRepository.find();
  }

  // Método que retorna um curso específico;
  findOne(id: any) {
    const course = this.courseRepository.find(id);
    if (!course){
      throw new NotFoundException('Course not found');
    }
    return course;
  }

  // Método que cria um novo curso;
  // createCouseDTO -> É uma estrutura onde eu defino informações que eu vou tranferir entre sistemas, entre aplicações; vão ser enviadas para o servidor;
  // O servidor vai receber essas informações e vai criar um novo curso;
  // Aplicação Cliente (Frontend) está enviando para a minha aplicação (Backend) uma estrutura de dados com o intuito de aramazenar informações;
  create(createCourseDTO: CreateCourseDto) {
    const course = this.courseRepository.create(createCourseDTO);
    return this.courseRepository.save(course);
  }

  // Método que atualiza um curso;
  update(id: any, updateCourseDTO) {
    const indexCourse = this.courses.findIndex((course: Course) => course.id === id);
    this.courses[indexCourse] = updateCourseDTO;

    return updateCourseDTO;
  }

  // Método que deleta um curso;
  delete(id: number): Course {
    const index = this.courses.findIndex(course => course.id === id);
    const course = this.courses[index];
    this.courses.splice(index, 1);
    return course;
  }

  // Método que retorna um curso com base no id;
  findOneById(id: number): Course {
    return this.courses.find(course => course.id === id);
  }

  // Método que retorna um curso com base no nome;
  findOneByName(name: string): Course {
    return this.courses.find(course => course.name === name);
  }

  // Método que retorna um curso com base na descrição;
  findOneByDescription(description: string): Course {
    return this.courses.find(course => course.description === description);
  }

  // Método que retorna um curso com base na tag;
  findOneByTag(tag: string): Course {
    return this.courses.find(course => course.tags.includes(tag));
  }

}
function remove(id: number, string: any) {
  throw new Error('Function not implemented.');
}

