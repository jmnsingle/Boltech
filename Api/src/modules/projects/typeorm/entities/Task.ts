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
  id: number;

  @Column('uuid')
  project_id: string;

  @Column()
  description: string;

  @ManyToOne(() => Project, { eager: true })
  @JoinColumn({ name: 'project_id' })
  project: Project;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Task;
