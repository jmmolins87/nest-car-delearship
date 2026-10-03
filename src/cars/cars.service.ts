import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import { CreateCarDto, UpdateCarDto } from './dto/index.js';
import { Car } from './interfaces/car.interface.js';

@Injectable()
export class CarsService {

    private cars: Car[] = [
        {
            id: uuid(),
            brand: 'Tesla',
            model: 'Model S',
        },
        {
            id: uuid(),
            brand: 'Toyota',
            model: 'Corolla',
        },
        {
            id: uuid(),
            brand: 'Honda',
            model: 'Civic',
        },
        {
            id: uuid(),
            brand: 'Ford',
            model: 'Mustang',
        }
    ];

    findAll() {
        return this.cars;
    }

    findOneById(id: string) {
        const car = this.cars.find(car => car.id === id);
        if (!car) throw new NotFoundException(`Car with ID ${id} not found`);

        return car;
    }

    create(createCarDto: CreateCarDto) {

        const car: Car = {
            id: uuid(),
            ...createCarDto
        };
        this.cars.push(car);    
        return car;
    }

    update(id: string, updateCarDto: UpdateCarDto) {

        let carDB = this.findOneById(id);

        if (updateCarDto.id && updateCarDto.id !== id) {
            throw new BadRequestException(`Car with ID ${updateCarDto.id} not found`);
        }

        this.cars = this.cars.map(car => {
            if (car.id === id) {
                carDB = { ...carDB, ...updateCarDto, id };
                return carDB;
            }
            return car;
        });

        return carDB; // Coche actualizado
    }

    delete(id: string) {

        const car = this.findOneById(id);
        if (!car) throw new NotFoundException(`Car with ID ${id} deleted not found`);
        this.cars = this.cars.filter(car => car.id !== id);
        return; // undefined
    }

    fillCarsWithSeedData(cars: Car[]) {
        this.cars = cars;
    }
}
