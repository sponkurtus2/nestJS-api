import { TaskStatus } from '../task.entity';
import {
  IsString,
  IsNotEmpty,
  MinLength,
  IsOptional,
  IsIn,
} from 'class-validator';

export class createTaskDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  title: string;
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  description: string;
}

export class updateTaskDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @IsOptional()
  title?: string;
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @IsOptional()
  description?: string;
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @IsIn([TaskStatus.DONE, TaskStatus.IN_PROGRESS, TaskStatus.PENDING])
  status?: TaskStatus;
}
