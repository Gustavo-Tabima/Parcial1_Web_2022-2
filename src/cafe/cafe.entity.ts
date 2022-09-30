
import { Column, Entity, OneToMany, PrimaryGeneratedColumn, ManyToMany, ManyToOne, JoinTable, JoinColumn } from 'typeorm';
import { TiendaEntity } from 'src/tienda/tienda.entity';


@Entity()
export class CafeEntity {
    @PrimaryGeneratedColumn('uuid')
    id: number;
    @Column()
    nombre: string;
    @Column()
    descripcion: string;
    @Column()
    precio: number;
    @ManyToMany(() => TiendaEntity, tiendas => tiendas.cafes)
    tiendas: TiendaEntity[]
}
