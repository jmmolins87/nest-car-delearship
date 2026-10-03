import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';


import { BrandEntity } from './entities/brand.entity.js';
import { CreateBrandDto, UpdateBrandDto } from './dto/index.js';
import { Car } from '../cars/interfaces/car.interface.js';


@Injectable()
export class BrandsService {

  private brands: BrandEntity[] = [
    {
      id: uuid(),
      name: 'Toyota',
      createdAt: new Date().getTime(),
      updatedAt: new Date().getTime()
    }
  ];

  create(createBrandDto: CreateBrandDto) {

    const brand: BrandEntity = {
      id: uuid(),
      ...createBrandDto,
      createdAt: new Date().getTime(),
      updatedAt: new Date().getTime()
    };
    
    this.brands.push(brand);
    return brand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find(brand => brand.id === id);
    if (!brand) throw new NotFoundException(`Brand with ID ${id} not found`);

    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    
    let brandDB = this.findOne(id);

    this.brands = this.brands.map(brand => {
      if (brand.id === id) {
        brandDB.updatedAt = new Date().getTime();
        brandDB = { ...brandDB, ...updateBrandDto };
        return brandDB;
      }
      return brandDB;
    });

    return this.findOne(id);
  }

  remove(id: string) {
    this.brands = this.brands.filter(brand => brand.id !== id);
  }

  fillBRANDSWithSeedData(brands: BrandEntity[]) {
    this.brands = brands;
  }
}
