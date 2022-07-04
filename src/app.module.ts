import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { CoursesController } from './courses/courses.controller';
// import { CoursesService } from './courses/courses.service';
import { CoursesModule } from './model/courses.module';

@Module({
  imports: [CoursesModule],
  // controllers: [AppController, CoursesController],
  controllers: [AppController],

  // providers: [AppService, CoursesService],
  providers: [AppService],

})
export class AppModule {}
