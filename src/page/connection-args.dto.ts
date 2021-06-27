import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsOptional } from 'class-validator';

export class ConnectionArgs {
  @IsOptional()
  @IsNumber()
  // 👇 use if enableImplicitConversion not enabled
  // @Type(() => Number)
  @ApiProperty({ required: false })
  first?: number;

  @IsOptional()
  @IsNumber()
  // 👇 use if enableImplicitConversion not enabled
  // @Type(() => Number)
  @ApiProperty({ required: false })
  last?: number;

  @ApiProperty({ required: false })
  after?: string;

  @ApiProperty({ required: false })
  before?: string;
}
