import dayjs from 'dayjs';

import { RentalsRepositoryInMemory } from '@modules/rentals/repositories/in-memory/RentalsRepositoryInMemory';
import { DayjsProvider } from '@shared/container/providers/DateProvider/implementations/DayjsDateProvider';
import { AppError } from '@shared/errors/AppError';

import { CreateRentalUseCase } from './CreateRentalUseCase';
import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';

let createRentalUseCase: CreateRentalUseCase;
let rentalsRepositoryInMemory: RentalsRepositoryInMemory;
let carsRepositoryInMemory: CarsRepositoryInMemory;
let dayjsProvider: DayjsProvider;

describe('Create Rental', () => {
    const dayAdd24Hours = dayjs().add(1, 'day').toDate();

    beforeEach(() => {
        rentalsRepositoryInMemory = new RentalsRepositoryInMemory();
        carsRepositoryInMemory = new CarsRepositoryInMemory();
        dayjsProvider = new DayjsProvider();
        createRentalUseCase = new CreateRentalUseCase(
            rentalsRepositoryInMemory,
            dayjsProvider,
            carsRepositoryInMemory
        );
    });

    it('should be able to create a new rental', async () => {

        const car = await carsRepositoryInMemory.create({
            name: 'Test',
            description: 'Test',
            daily_rate: 100,
            license_plate: 'Test',
            fine_amount: 40,
            category_id: 'Category',
            brand: 'Test'
        });

        const rental = await createRentalUseCase.execute({
            user_id: '12345',
            car_id: car.id,
            expected_return_date: dayAdd24Hours,
        });

        expect(rental).toHaveProperty('id');
        expect(rental).toHaveProperty('start_date');
    });

    it('should not be able to create a new rental if the user is active in other', async () => {

        await rentalsRepositoryInMemory.create({
            car_id: '121212',
            expected_return_date: dayAdd24Hours,
            user_id: '123'
        });

        await expect(createRentalUseCase.execute({
            user_id: '123',
            car_id: '321',
            expected_return_date: dayAdd24Hours,
        })
        ).rejects.toEqual(new AppError('There is a rental in progress for user'));
    });

    it('should not be able to create a new rental if the car is active in other', async () => {
        await rentalsRepositoryInMemory.create({
            car_id: '121212',
            expected_return_date: dayAdd24Hours,
            user_id: '123'
        });

        expect(createRentalUseCase.execute({
            user_id: '321',
            car_id: '121212',
            expected_return_date: dayAdd24Hours,
        })
        ).rejects.toEqual(new AppError('Car is unavailable'));
    });

    it('should not be able to create a new rental with invalid return time', async () => {
        expect(createRentalUseCase.execute({
            user_id: '123',
            car_id: '123',
            expected_return_date: dayjs().toDate(),
        })
        ).rejects.toEqual(new AppError('Invalid return time'));
    });
});
