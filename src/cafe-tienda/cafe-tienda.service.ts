import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BusinessLogicException } from '../shared/errors/business-errors';
import { BusinessError } from '../shared/errors/business-errors';
import { TiendaEntity } from 'src/tienda/tienda.entity';
import { CafeEntity } from 'src/cafe/cafe.entity';
@Injectable()
export class CafeTiendaService {
    constructor(
        @InjectRepository(CafeEntity)
        private readonly cafeRepository: Repository<CafeEntity>,
     
        @InjectRepository(TiendaEntity)
        private readonly tiendaRepository: Repository<TiendaEntity>
    ) {}


    async addCafeTienda(CafeId:bigint , TiendaId: bigint): Promise<TiendaEntity> {
        const tienda = await this.tiendaRepository.findOne({where: {id: TiendaId}});
        if (!tienda)
          throw new BusinessLogicException("La tienda con el id dado no fue encontrada", BusinessError.NOT_FOUND);
       
        const cafe = await this.cafeRepository.findOne({where: {id: CafeId}});
        if (!cafe)
          throw new BusinessLogicException("El cafe con el id dado no fue encontrado", BusinessError.NOT_FOUND);
     
        tienda.cafes = [...tienda.cafes, cafe];
        return await this.tiendaRepository.save(tienda);
      }


}
