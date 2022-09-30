import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TiendaEntity } from './tienda.entity';
import { Repository } from 'typeorm';
import { BusinessLogicException } from 'src/shared/errors/business-errors';
import { BusinessError } from 'src/shared/errors/business-errors';
@Injectable()
export class TiendaService {

    constructor(
        @InjectRepository(TiendaEntity)
        private readonly tiendaRepository: Repository<TiendaEntity>
    ){}

    async createTienda(tienda: TiendaEntity): Promise<TiendaEntity> {
        if(tienda.telefono.length == 10){
        return await this.tiendaRepository.save(tienda);
        }
        else{
            throw new BusinessLogicException("No se puede crear una tienda con un teléfono menor a 10 caracteres.", BusinessError.BAD_REQUEST);
        }
        }



}
