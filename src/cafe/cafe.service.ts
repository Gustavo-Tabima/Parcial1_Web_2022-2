import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CafeEntity } from './cafe.entity';
import { Repository } from 'typeorm';
import { BusinessLogicException } from 'src/shared/errors/business-errors';
import { BusinessError } from 'src/shared/errors/business-errors';
@Injectable()
export class CafeService {

    constructor(
        @InjectRepository(CafeEntity)
        private readonly cafeRepository: Repository<CafeEntity>
    ){}

    async createCafe(cafe: CafeEntity): Promise<CafeEntity> {
        if(cafe.precio > 0){
        return await this.cafeRepository.save(cafe);
        }
        else{
            throw new BusinessLogicException("No se puede crear un café con precio negativo", BusinessError.BAD_REQUEST);
        }
        }



}
