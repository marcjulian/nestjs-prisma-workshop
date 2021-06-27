import { ApiProperty } from '@nestjs/swagger';

export class ConnectionArgs {
  @ApiProperty({ required: false })
  first?: number;

  @ApiProperty({ required: false })
  last?: number;

  @ApiProperty({ required: false })
  after?: string;

  @ApiProperty({ required: false })
  before?: string;
}
