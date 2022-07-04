import { Injectable } from '@nestjs/common';
import { Course } from 'src/entities/course.entity';

@Injectable()
export class CoursesService {
  private courses: Course[] = [
    { id: 1, name: 'course1', description: 'course1 description' },
  ];
}
