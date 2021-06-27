import { ApiProperty } from '@nestjs/swagger';
import { Edge } from './edge.dto';
import { PageInfo } from './page-info.dto';

export class Page<Record> {
  @ApiProperty()
  edges: Edge<Record>;

  @ApiProperty()
  pageInfo: PageInfo;
  
  @ApiProperty()
  totalCount: number;
}
