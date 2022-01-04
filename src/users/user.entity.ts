import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'uuid', name: 'user_uuid', unique: true })
  userId: string;

  @Column({ length: 25, nullable: true })
  fullName: string;

  @Column({ nullable: true })
  birthday: string;

  @Column({ default: true })
  isActive: boolean;
}
