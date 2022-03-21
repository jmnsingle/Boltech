import { Container } from './styles';

export interface TaskProps {
  id: string;
  description: string;
  isDone: boolean;
}

const Task = ({ description, id, isDone }: TaskProps) => {
  return (
    <Container>
      <h1>Task</h1>
    </Container>
  );
};

export default Task;
