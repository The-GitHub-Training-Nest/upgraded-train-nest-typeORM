import { Injectable } from '@nestjs/common';
import { Course } from 'src/entities/course.entity';

@Injectable()
export class CoursesService {
  // Primeiro registro pré-definido;
  private courses: Course[] = [
    { id: 1, name: 'course1', description: 'course1 description', tags: ['tag1', 'tag2'] },
    { id: 2, name: 'course2', description: 'course2 description', tags: ['tag1', 'tag2'] },
    { id: 3, name: 'course3', description: 'course3 description', tags: ['tag1', 'tag2'] },
  ];

  // Métodos que irão manipular a estrutura de dados acima;

  // Método que retorna todos os cursos;
  findAll(): Course[] {
    return this.courses;
  }

  // Método que retorna um curso específico;
  findOne(id: number): Course {
    return this.courses.find(course => course.id === id);
  }

  // Método que cria um novo curso;
  create(course: Course): Course {
    course.id = this.courses.length + 1;
    this.courses.push(course);
    return course;
  }

  // Método que atualiza um curso;
  update(id: number, course: Course): Course {
    const index = this.courses.findIndex(course => course.id === id);
    this.courses[index] = course;
    return course;
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
