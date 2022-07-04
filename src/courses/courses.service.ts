import { Injectable } from '@nestjs/common';
import { Course } from 'src/entities/course.entity';

@Injectable()
export class CoursesService {
  private courses: Course[] = [
    { id: 1, name: 'course1', description: 'course1 description', tags: ['tag1', 'tag2'] },
    { id: 2, name: 'course2', description: 'course2 description', tags: ['tag1', 'tag2'] },
    { id: 3, name: 'course3', description: 'course3 description', tags: ['tag1', 'tag2'] },
  ];
}
