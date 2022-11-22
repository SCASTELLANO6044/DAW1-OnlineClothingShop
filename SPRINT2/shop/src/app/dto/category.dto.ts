import { ProductDto } from "./product.dto";

export interface CategoryDto {
    name: string;
    products: ProductDto[];
}