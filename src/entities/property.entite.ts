import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('users')
export class Property {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  email: string;
  @Column()
  password: string;
  @Column({ default: 0 })
  age: number;
}
