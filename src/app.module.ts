import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module.js';
import { BrandsModule } from './brands/brands.module.js';

@Module({
  imports: [CarsModule, BrandsModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
