import { v4 as uuid } from "uuid";

import { BrandEntity } from "../../brands/entities/brand.entity.js";


export const BRANDS_SEED: BrandEntity[] = [
    {
        id: uuid(),
        name: 'Tesla',
        createdAt: new Date().getTime(),
    },
    {
        id: uuid(),
        name: 'Jeep',
        createdAt: new Date().getTime(),
    },
    {
        id: uuid(),
        name: 'BMW',
        createdAt: new Date().getTime(),
    }
]