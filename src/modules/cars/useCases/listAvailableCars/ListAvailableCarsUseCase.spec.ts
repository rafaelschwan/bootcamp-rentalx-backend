import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';

import { ListAvailableCarsUseCase } from './ListAvailableCarsUseCase';

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe('List cars', () => {
    beforeEach(() => {
        carsRepositoryInMemory = new CarsRepositoryInMemory();
        listAvailableCarsUseCase = new ListAvailableCarsUseCase(
            carsRepositoryInMemory,
        );
    });

    it('should be able to list all available cars', async () => {
        const car = await carsRepositoryInMemory.create({
            name: 'Fiesta',
            description: 'Descrição',
            daily_rate: 150,
            license_plate: 'AAA-1235',
            fine_amount: 100,
            brand: 'Ford',
            category_id: 'category_id',
        });

        const cars = await listAvailableCarsUseCase.execute({});

        expect(cars).toEqual([car]);
    });

    it('should ble able to list all available cars by brand', async () => {
        const car = await carsRepositoryInMemory.create({
            name: 'Fiesta',
            description: 'Descrição',
            daily_rate: 150,
            license_plate: 'AAA-1235',
            fine_amount: 100,
            brand: 'Ford 2',
            category_id: 'category_id',
        });

        const cars = await listAvailableCarsUseCase.execute({
            brand: 'Ford 2',
        });

        expect(cars).toEqual([car]);
    });

    it('should ble able to list all available cars by name', async () => {
        const car = await carsRepositoryInMemory.create({
            name: 'Fiesta 2',
            description: 'Descrição',
            daily_rate: 150,
            license_plate: 'AAA-1234',
            fine_amount: 100,
            brand: 'Ford 2',
            category_id: 'category_id',
        });

        const cars = await listAvailableCarsUseCase.execute({
            name: 'Fiesta 2',
        });

        expect(cars).toEqual([car]);
    });

    it('should ble able to list all available cars by category', async () => {
        const car = await carsRepositoryInMemory.create({
            name: 'Fiesta',
            description: 'Descrição',
            daily_rate: 150,
            license_plate: 'AAA-1236',
            fine_amount: 100,
            brand: 'Ford 2',
            category_id: 'category_id',
        });

        const cars = await listAvailableCarsUseCase.execute({
            category_id: 'category_id',
        });

        expect(cars).toEqual([car]);
    });
});
