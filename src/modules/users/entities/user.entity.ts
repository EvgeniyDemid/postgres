import { Entity, Column } from "typeorm";
import { RowEntity } from "../../../shared/Entity/row.entity";

@Entity({name:'user'})
export class UserEntity extends RowEntity<UserEntity>{
    toObject(): any {
      throw new Error('Method not implemented.');
    }
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

    toResponseUser(){
 const {id, email,firstName,lastName,address,city,country,phone,createdAt,updatedAt}=this;
 return {id, email,firstName,lastName,address,city,country,phone,createdAt,updatedAt};
  }
}