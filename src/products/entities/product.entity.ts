import { ApiProperty } from "@nestjs/swagger";
import { Product,Prisma } from "@prisma/client";

export class ProductEntity implements Product {

    @ApiProperty()
    id:string; 
    
    @ApiProperty()   
    createdAt:Date;

    @ApiProperty()
    updatedAt: Date;

    @ApiProperty()
    name:string;

    @ApiProperty({required:false,nullable:true})
    description: string;

    @ApiProperty({type:String})
    price: Prisma.Decimal;

    @ApiProperty()
    sku:string;

    @ApiProperty({default:false})
    published:boolean;
}
