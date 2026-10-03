import { v4 as uuid } from "uuid";

import { Car } from "../../cars/interfaces/car.interface.js";


export const CARS_SEED: Car[] = [
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
]