import { Module } from '@nestjs/common';

import { SeedService } from './seed.service.js';
import { SeedController } from './seed.controller.js';

import { BrandsModule } from '../brands/brands.module.js';
import { CarsModule } from '../cars/cars.module.js';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [CarsModule, BrandsModule],
})
export class SeedModule {}
