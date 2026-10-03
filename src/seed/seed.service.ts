import { Injectable } from '@nestjs/common';

import { CarsService } from '../cars/cars.service.js';
import { BrandsService } from '../brands/brands.service.js';

import { CARS_SEED } from './data/cars.seed.js';
import { BRANDS_SEED } from './data/brands.seed.js';

@Injectable()
export class SeedService {

  constructor(
    private readonly carsService: CarsService,
    private readonly brandsService: BrandsService
  ) {}

  populateDB() { 
    this.carsService.fillCarsWithSeedData( CARS_SEED );
    this.brandsService.fillBRANDSWithSeedData( BRANDS_SEED );

    return 'Seed executed';
  }
}
