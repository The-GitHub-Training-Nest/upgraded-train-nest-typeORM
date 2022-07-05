import { IsNotEmpty, IsString } from "class-validator";

export class CreateCourseDto {

  @IsString()
  @IsNotEmpty()
  readonly id: any;

  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsNotEmpty()
  @IsString()
  readonly tags: string[];
  
}
