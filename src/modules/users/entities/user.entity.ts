import { PrimaryRowDto } from "src/shared/dto/primary-row.dto";
import { Entity, Column } from "typeorm";

@Entity({name:'user'})
export class UserEntity extends PrimaryRowDto{
    @Column({unique:true, nullable: true, default: null, type: "varchar", length: 255 })
    email: string;
    @Column({nullable: true, default: null, type: 'varchar', length: 255})
    password: string;
    @Column({nullable: false, type: 'varchar', length: 255})
    firstName: string;
    @Column({nullable: false, type: 'varchar', length: 255})
    lastName: string;
    @Column({nullable: true, default: null, type: 'varchar', length: 255})
    address: string;
    @Column({nullable: true, default: null, type: 'varchar', length: 255})
    city: string;
    @Column({nullable: true, default: null, type: 'varchar', length: 255})
    country: string;
    @Column({nullable: true, default: null, type: 'varchar', length: 20})
    phone: string;
}