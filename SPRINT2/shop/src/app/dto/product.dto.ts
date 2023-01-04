export interface ProductDto {
    id: number;
    name: string;
    previousPrice: number;
    price: number;
    valoration: number;
    numberOfValorations: number;
    availableSizes: string[];
    imgPath: string;
}