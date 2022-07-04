import { PartialType } from "@nestjs/mapped-types"; // O que a gente precisa validar no UpdateCourseDto é parte do que tem no CreateCourseDto;
// Basta eu validar no CreaaaateCourseDto e que no UpdateCourseDto vai estar validado;
// Fica mais fácil para manutenção; Otimização para manutenção;
// import { IsNotEmpty, IsString } from "class-validator";
import { CreateCourseDto } from "./create-course.dto";

export class UpdateCourseDto extends PartialType(CreateCourseDto){

  // @IsString()
  // @IsNotEmpty()
  readonly name?: string;
  
  // @IsString()
  // @IsNotEmpty()
  readonly description?: string;
  
  // @IsString()
  // @IsNotEmpty()
  readonly tags?: string[];

}