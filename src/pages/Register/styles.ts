import styled from 'styled-components';

export const Container = styled.div`
  width: 50%;
  margin: auto;
  padding: 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 30px 20px;
  background-color: #ccc;
  border-radius: 10px;
`;

export const Input = styled.input`
  width: 100%;
  display: inline-block;
  padding: 6px 8px;
  font-size: 20px;
  background-color: #fff;
  border: none;
  border-radius: 10px;
  border-radius; 10px;
`;

export const Button = styled.button`
  padding: 6px 10px;
  font-size: 20px;
  border-radius: 10px;
  cursor: pointer;
`;

export const Login = styled.div`
  align-self: flex-end;
  color: purple;
  cursor: pointer;
  padding: 4px 6px;
`;