import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.LIGHT};
  padding: 4px 0px;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.COLORS.LIGHT};
  font-weight: 600;
  font-weight: 600;
  margin-top: 0.6rem;
`;

export const InputField = styled.input`
  background-color: transparent;
  margin-top: 0.6rem;
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-weight: bold;

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${({ theme }) => theme.COLORS.LIGHT_GREY};
    opacity: 1; /* Firefox */
  }

  ::-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: ${({ theme }) => theme.COLORS.LIGHT_GREY};
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: ${({ theme }) => theme.COLORS.LIGHT_GREY};
  }
`;
