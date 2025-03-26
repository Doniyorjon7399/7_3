import {
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
  Min,
  Max,
} from 'class-validator';

export class properyDto {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @IsString()
  email: string;
  @IsNotEmpty()
  @IsString()
  @Length(4, 20)
  password: string;
  @IsNotEmpty()
  @IsNumber()
  @Min(18)
  @Max(150)
  age: number;
}
