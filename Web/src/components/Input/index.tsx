import { InputHTMLAttributes } from 'react';
import { Container, InputField, Label } from './styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input = ({ label, placeholder, ...props }: Props) => {
  return (
    <Container>
      <Label>{label}</Label>
      <InputField {...props} placeholder={placeholder} />
    </Container>
  );
};

export default Input;
