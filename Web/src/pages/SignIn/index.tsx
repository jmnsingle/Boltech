import { FormEvent, useState } from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import ApiClient from '../../services/api';
import { Container, Form } from './styled';

const SignIn = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSignIn = (e: FormEvent) => {
    e.preventDefault();
    ApiClient.signIn({ email, password })
      .then(response => {
        console.log('response', response);
      })
      .catch(error => {
        console.log('ERROR:', error);
      });
  };

  return (
    <Container>
      <Form onSubmit={handleSignIn}>
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

        <Button title="SignIn" />
      </Form>
    </Container>
  );
};

export default SignIn;
