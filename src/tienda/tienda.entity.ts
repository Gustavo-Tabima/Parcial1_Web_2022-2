import { Column, Entity, OneToMany, PrimaryGeneratedColumn, ManyToMany, ManyToOne, JoinTable, JoinColumn } from 'typeorm';
import { CafeEntity } from 'src/cafe/cafe.entity';
@Entity()
export class TiendaEntity {
    @PrimaryGeneratedColumn('uuid')
    id: number;
    @Column()
    nombre: string;
    @Column()
    direccion: string;
    @Column()
    telefono: string;

    @ManyToMany(() => CafeEntity, cafes => cafes.tiendas)
    cafes: CafeEntity[]


}
