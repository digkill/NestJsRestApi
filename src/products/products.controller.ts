import {
    Controller,
    Get,
    Param,
    Post,
    Delete,
    Body,
    Put
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsService } from './products.service';
import { Product } from './schemas/product.schema';

@Controller('products')
export class ProductsController {

    constructor(private readonly productsService: ProductsService) {
    }

    @Get()
    getAll(): Promise<Product[]> {
        return this.productsService.getAll()
    }

    @Get(':id')
    getOne(@Param('id') id: string): Promise<Product> {
        return this.productsService.getById(id)
    }

    @Post()
    create(@Body() createProductDto: CreateProductDto): Promise<Product> {
        return this.productsService.create(createProductDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<Product> {
        return this.productsService.remove(id)
    }

    @Put(':id')
    update(@Body() updateProductDto: UpdateProductDto, @Param('id') id: string): Promise<Product> {
        return this.productsService.update(id, updateProductDto)
    }
}
