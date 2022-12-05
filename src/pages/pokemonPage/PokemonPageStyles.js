import styled from "styled-components";

export const Title = styled.h2`
  color: #61dbfb;
  margin-block: 30px;
  text-align: center;
`;
export const FormSearch = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 100%;
  @media (min-width: 768px) {
    max-width: 70%;
  }
`;
export const InputSearch = styled.input`
  width: 100%;
  background-color: #252525;
  padding: 10px;
  background: #252525;
  color: #fafafa;
  outline: none;
  border: none;
  border-radius: 5px 5px 0 0;
`;
export const ButtonSearch = styled.button`
  width: 100%;
  font-weight: 700;
  background-color: #252525;
  padding: 10px;
  background: #61dbfb;
  color: #333;
  outline: none;
  border: none;
  border-radius: 0 0 5px 5px;
  cursor: pointer;
`;
export const CardContainer = styled.div`
  margin-block: 50px;
`;
export const MessageError = styled.p`
  color: red;
  font-size: 24px;
  text-align: center;
`;
