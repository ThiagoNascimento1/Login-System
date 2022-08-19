import styled from "styled-components";

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
`;

export const Input = styled.input`
  width: 100%;
  display: inline-block;
  padding: 5px 8px;
  font-size: 20px;
  background-color: #ccc;
  border: none;
  border-radius; 10px;
`;

export const Button = styled.button`
  padding: 8px 14px;
  font-size: 20px;
  border-radius: 10px;
  cursor: pointer;
`;