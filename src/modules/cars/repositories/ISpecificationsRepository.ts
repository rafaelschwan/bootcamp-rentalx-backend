import { Specification } from '../entities/Specification';

interface ICreateSpecificationDTO {
    name: string;
    description: string;
}

interface ISpecificationsRepository {
    create({ name, description }: ICreateSpecificationDTO): void;
    findByName(nome: string): Specification;
}

export { ISpecificationsRepository, ICreateSpecificationDTO };
