import { useState } from 'react';
import Input from '../../components/Input';
import { Container, Form } from './styled';

const SignIn = () => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  return (
    <Container>
      <Form>
        <Input
          label="Email"
          placeholder="Type your email"
          onChange={e => setEmail(e.target.value)}
          type="email"
        />
        <Input
          label="Password"
          placeholder="Type your password"
          onChange={e => setPassword(e.target.value)}
          type="password"
        />
      </Form>
    </Container>
  );
};

export default SignIn;
