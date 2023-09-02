import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 30px auto;
  background-color: #0a3033;
  color: white;
  height: 400px;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  width: 15%;
`;

export const Heading = styled.h4`
  font-size: 30px;
  font-weight: bold;
`;

export const Span = styled.span`
  margin-right: 20px;
`;

export const InputDiv = styled.div`
  display: flex;
`;

export const Input = styled.input`
  width: 100%;
`;

export const Button = styled.button`
  width: 50%;
  font-size: 16px;
  text-align: center;
  padding: 10px;
  margin-left: 20px;
  border-radius: 5px;
  color: white;
  background-color: #bf119c;
  border: 1px solid #bf119c;
  &:hover {
    cursor: pointer;
    background-color: white;
    color: #bf119c;
  }
`;
