import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 25, nullable: true })
  fullName: string;

  @Column({ nullable: true })
  birthday: string;

  @Column({ nullable: true, default: true })
  isActive: boolean;
}
