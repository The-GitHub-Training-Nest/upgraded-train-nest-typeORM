import { Module } from '@nestjs/common';
import { AppController } from '../controller/app.controller';
import { AppService } from '../service/app.service';
import { CoursesModule } from '../model/courses.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [CoursesModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 49153,
    username: 'postgres',
    password: 'postgrespw',
    database: 'postgres',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    autoLoadEntities: true,
    synchronize: true,
  })],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule {}
