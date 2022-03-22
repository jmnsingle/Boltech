import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import User from '../../../users/typeorm/entities/User';

@Entity('projects')
class Project {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column('uuid')
  user_id: string;

  @Column()
  title: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Project;
