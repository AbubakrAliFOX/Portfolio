import styled, {css} from "styled-components";
import { Form } from "formik";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
    padding-top: 40px;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

export const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (width < 768px) {
    margin-top: 12px;
    font-size: 16px;
    padding: 0 20px;
  }
`;

export const ContactForm = styled(Form)`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
  border: 0.1px solid rgba(0, 99, 255, 1);
`;

export const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

export const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme}) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }

  ${({ valid }) =>
    valid &&
    css`
      border: 2px solid rgb(0, 156, 38);

      &:focus,
      &:active {
        border: 2px solid rgb(0, 156, 38);
        outline: none;
      }

      /* Autocomplete styles in Chrome*/
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus {
        border: 2px solid rgb(0, 156, 38);
      }
    `}

  ${({ error }) =>
    error &&
    css`
      border: 2px solid rgb(191, 49, 12);
      outline: none;

      &:focus,
      &:active {
        border: 2px solid rgb(191, 49, 12);
        outline: none;
      }

      /* Autocomplete styles in Chrome*/
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus {
        border: 2px solid rgb(191, 49, 12);
      }
    `}
`;

export const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }

  ${({ valid }) =>
    valid &&
    css`
      border: 2px solid rgb(0, 156, 38);

      &:focus,
      &:active {
        border: 2px solid rgb(0, 156, 38);
        outline: none;
      }

      /* Autocomplete styles in Chrome*/
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus {
        border: 2px solid rgb(0, 156, 38);
      }
    `}

  ${({ error }) =>
    error &&
    css`
      border: 2px solid rgb(191, 49, 12);
      outline: none;

      &:focus,
      &:active {
        border: 2px solid rgb(191, 49, 12);
        outline: none;
      }

      /* Autocomplete styles in Chrome*/
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus {
        border: 2px solid rgb(191, 49, 12);
      }
    `}
`;

export const ErrMsg = styled.span`
  display: block;
  color: red;
  font-size: 18px;
  margin-top: 3px;
  margin-left: 10px;
`;

export const ContactButton = styled.button`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background-color: #0063ff;
  border: 1.8px solid ${({ theme }) => theme.primary};
  background: -moz-;
  background: -webkit-;
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.6s ease-in-out;
  /* &:hover {
    background-color: #0063ff;
    color: ${({ theme }) => theme.white};
  } */

  &:disabled {
    background-color: transparent;
  }

  &:disabled:hover {
    cursor: not-allowed;
  }
`;