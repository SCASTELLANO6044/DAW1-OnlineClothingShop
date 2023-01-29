export interface ProductDto {
    id: number;
    name: string;
    description: string;
    previous_price: number;
    price: number;
    valorations: number;
    number_of_valorations: number;
    available_size: string;
    img_path: string;
    category_id: number;
}