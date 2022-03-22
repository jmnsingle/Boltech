import { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

function Button({ title, ...rest }: ButtonProps) {
  return (
    <Container {...rest}>
      <span>{title}</span>
    </Container>
  );
}

export default Button;
