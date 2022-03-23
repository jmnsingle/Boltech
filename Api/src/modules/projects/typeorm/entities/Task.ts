import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import Project from './Project';

@Entity('tasks')
class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  project_id: string;

  @Column()
  description: string;

  @Column('boolean')
  is_done: boolean;

  @ManyToOne(() => Project)
  @JoinColumn({ name: 'project_id' })
  project: Project;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Task;
