import { DataSource } from "typeorm";
import { Course } from "../entities/course.entity";

export const courseProviders = [
  {
    provide: "CourseRepository",
    UseFactory: (dataSource: DataSource) => dataSource.getRepository(Course),
    inject: ['DATA_SOURCE'],
    useValue: Course,
  },
]