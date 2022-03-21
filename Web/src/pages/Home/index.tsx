import TasksList, { TaskListProps } from '../../components/TasksList';
import { Container } from './styles';

const Home = () => {
  const data: Array<TaskListProps> = [
    {
      id: 'abcz',
      name: 'Projeto 01',
      tasks: [
        { id: '123', description: 'Criar projeto de tasks 01', isDone: true },
        { id: '1234', description: 'Criar projeto de tasks 02', isDone: true },
        {
          id: '1235',
          description: 'Criar projeto de tasks 03',
          isDone: false,
        },
        {
          id: '1236',
          description: 'Criar projeto de tasks 04',
          isDone: false,
        },
      ],
    },
    {
      id: 'abczd',
      name: 'Projeto 02',
      tasks: [
        { id: '123', description: 'Criar projeto de tasks 01', isDone: true },
        { id: '1234', description: 'Criar projeto de tasks 02', isDone: true },
        {
          id: '1235',
          description: 'Criar projeto de tasks 03',
          isDone: false,
        },
        {
          id: '1236',
          description: 'Criar projeto de tasks 04',
          isDone: false,
        },
      ],
    },
    {
      id: 'abczdd',
      name: 'Projeto 03',
      tasks: [
        { id: '123', description: 'Criar projeto de tasks 01', isDone: true },
        { id: '1234', description: 'Criar projeto de tasks 02', isDone: true },
        {
          id: '1235',
          description: 'Criar projeto de tasks 03',
          isDone: false,
        },
        {
          id: '1236',
          description: 'Criar projeto de tasks 04',
          isDone: false,
        },
      ],
    },
  ];

  return (
    <Container>
      <TasksList tasks={data} />
    </Container>
  );
};

export default Home;
