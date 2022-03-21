import {
  Actions,
  ButtonIcon,
  Container,
  Header,
  List,
  ListContainer,
  Title,
  TaskListContent,
  TaskListaskHeader,
  TaskContentContainer,
  CheckBox,
  TaskContentDescription,
  Content,
} from './styles';

interface TaskProps {
  id: string;
  description: string;
  isDone: boolean;
}

export interface TaskListProps {
  id: string;
  name: string;
  tasks: Array<TaskProps>;
}

const TasksList = ({ tasks }: { tasks: Array<TaskListProps> }) => {
  const renderTaskContent = (task: TaskProps) => {
    return (
      <TaskContentContainer key={task.id}>
        <CheckBox type="checkbox" name={task.id} />
        <TaskContentDescription>{task.description}</TaskContentDescription>
      </TaskContentContainer>
    );
  };

  const renderTask = (task: TaskListProps) => {
    return (
      <ListContainer key={task.id}>
        <Header>
          <Title>{task.name}</Title>
          <Actions>
            <ButtonIcon>Edit</ButtonIcon>
            <ButtonIcon>Delete</ButtonIcon>
          </Actions>
        </Header>
        <TaskListContent>
          <TaskListaskHeader>To Do</TaskListaskHeader>
          {task.tasks.map(renderTaskContent)}
        </TaskListContent>
      </ListContainer>
    );
  };

  return (
    <Container>
      <Content>
        <List>{tasks.map(renderTask)}</List>
      </Content>
    </Container>
  );
};

export default TasksList;
