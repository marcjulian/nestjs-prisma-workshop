import { ApiProperty } from '@nestjs/swagger';

export class ProductEntity {
  @ApiProperty()
  id: string;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updatedAt: Date;
  @ApiProperty()
  name: string;
  @ApiProperty({ required: false, nullable: true })
  description?: string;
  @ApiProperty()
  price: string;
  @ApiProperty()
  sku: string;
  @ApiProperty({ default: false })
  published: boolean;
}
