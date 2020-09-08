import { Entity, Column } from "typeorm";
import { PrimaryRowDto } from "src/shared/dto/primary-row.dto";

@Entity({name: 'content'})
export class ContentEntity extends PrimaryRowDto {
    toObject(): any {
        throw new Error("Method not implemented.");
    }
    @Column({ nullable: true, default: null, type: "varchar", length: 255 })
    title: string

    @Column({ nullable: true, default: null, type: "varchar", length: 255 })
    avtor: string
    
    @Column({ nullable: true, default: null, type: "varchar", length: 255 })
    discription: string
    
}