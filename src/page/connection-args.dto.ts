import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class ConnectionArgs {
  // 👇 use if enableImplicitConversion not enabled
  // @Type(() => Number)
  @ApiProperty({ required: false })
  first?: number;
  
  // 👇 use if enableImplicitConversion not enabled
  // @Type(() => Number)
  @ApiProperty({ required: false })
  last?: number;

  @ApiProperty({ required: false })
  after?: string;

  @ApiProperty({ required: false })
  before?: string;
}
