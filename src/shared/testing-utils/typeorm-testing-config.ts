
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComercioEntity } from '../../comercio/comercio.entity';
import { FotoComercioEntity } from '../../foto-comercio/foto-comercio.entity';
import { FotoUsuarioEntity } from '../../foto-usuario/foto-usuario.entity';
import { PlanEntity } from '../../plan/plan.entity';
import { QueueEntity } from '../../queue/queue.entity';
import { TagEntity } from '../../tag/tag.entity';
import { UsuarioEntity } from '../../usuario/usuario.entity';
import { ValoracionEntity } from '../../valoracion/valoracion.entity';

export const TypeOrmTestingConfig = () => [
 TypeOrmModule.forRoot({
   type: 'sqlite',
   database: ':memory:',
   dropSchema: true,
   entities: [ComercioEntity,FotoComercioEntity,FotoUsuarioEntity,PlanEntity,QueueEntity,TagEntity,UsuarioEntity,ValoracionEntity],
   synchronize: true,
   keepConnectionAlive: true
 }),
 TypeOrmModule.forFeature([ComercioEntity,FotoComercioEntity,FotoUsuarioEntity,PlanEntity,QueueEntity,TagEntity,UsuarioEntity,ValoracionEntity]),
];
