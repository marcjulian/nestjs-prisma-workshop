import { Product, Prisma } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';

export class ProductEntity implements Product {
  @ApiProperty()
  id: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  name: string;

  @ApiProperty({ required: false, nullable: true })
  description: string | null;

  @Transform(({ value }) => value.toNumber())
  @ApiProperty({ type: Number })
  price: Prisma.Decimal;

  @ApiProperty()
  sku: string;

  @ApiProperty({ default: false })
  published: boolean;

  constructor(partial: Partial<ProductEntity>) {
    Object.assign(this, partial);

    // short for 👇
    // this.id = partial.id;
    // this.createdAt = partial.createdAt;
    // this.updatedAt = partial.updatedAt;
    // this.name = partial.name;
    // this.description = partial.description;
    // this.price = partial.price;
    // this.sku = partial.sku;
    // this.published = partial.published;
  }
}
