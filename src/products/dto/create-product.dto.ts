import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty()
  name: string;
  @ApiProperty({ required: false })
  description?: string;
  @ApiProperty()
  price: number;
  @ApiProperty()
  sku: string;
  @ApiProperty({ required: false, default: true })
  published?: boolean = false;
}
