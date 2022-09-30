import { Test, TestingModule } from '@nestjs/testing';
import { CafeService } from './cafe.service';
import { faker } from '@faker-js/faker';
import { Repository } from 'typeorm';
import { CafeEntity } from './cafe.entity';
import { TypeOrmTestingConfig } from '../shared/testing-utils/typeorm-testing-config';
import { getRepositoryToken } from '@nestjs/typeorm';
describe('CafeService', () => {
  let service: CafeService;
  let repository: Repository<CafeEntity>;
  let cafesList: CafeEntity[];
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [...TypeOrmTestingConfig()],
      providers: [CafeService],
    }).compile();

    service = module.get<CafeService>(CafeService);
    repository = module.get<Repository<CafeEntity>>(getRepositoryToken(CafeEntity));
    await seedDatabase();
  
  });
  const seedDatabase = async () => {
    repository.clear();
    cafesList = [];
    for(let i = 0; i < 5; i++){
      const cafe: CafeEntity = await repository.save({
        nombre: faker.lorem.word(),
        descripcion: faker.lorem.word(),
        precio: parseInt(faker.random.numeric())
      })
      cafesList.push(cafe);
    }
  }
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('createCafe debe arrojar una excepcion para un cafe invalido', async () => {
    const cafe: CafeEntity = await repository.save ({
      nombre: faker.lorem.word(),
      descripcion: faker.lorem.word(),
      precio:-1
         })
         await expect(() => service.createCafe(cafe)).rejects.toHaveProperty("message", "No se puede crear un café con precio negativo");
        });

        it('create debe devolver una tag nueva', async () => {
          const cafe: CafeEntity = {
            id:parseInt(faker.random.numeric()),
            nombre: faker.lorem.word(),
            descripcion: faker.lorem.word(),
            precio: parseInt(faker.random.numeric()),
            tiendas: []
          }
          const newcafe: CafeEntity = await service.createCafe(cafe);
          expect(newcafe).not.toBeNull();
        
          const storedTag: CafeEntity = await repository.findOne({where: {id: newcafe.id}})
          expect(storedTag).not.toBeNull();
          expect(storedTag.nombre).toEqual(newcafe.nombre)
          expect(storedTag.descripcion).toEqual(newcafe.descripcion)
          expect(storedTag.precio).toEqual(newcafe.precio)
        });
        


      
});
