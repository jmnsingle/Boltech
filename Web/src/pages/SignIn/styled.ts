import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form``;
