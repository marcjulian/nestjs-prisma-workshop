export class CreateProductDto {
  name: string;
  description?: string;
  price: number;
  sku: string;
  published?: boolean = false;
}
