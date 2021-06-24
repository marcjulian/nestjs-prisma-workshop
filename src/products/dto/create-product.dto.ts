import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  description?: string;
  @ApiProperty()
  price: number;
  @ApiProperty()
  sku: string;
  @ApiProperty()
  published?: boolean = false;
}
