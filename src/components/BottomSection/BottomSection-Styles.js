import styled from "@emotion/styled";

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 70px auto;
  color: #0a3033;
`;

export const Heading = styled.h3`
  font-size: 40px;
`;

export const Button = styled.button`
  width: 20%;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  padding: 20px;
  border-radius: 30px;
  color: white;
  background-color: #bf119c;
  border: 1px solid #bf119c;
  &:hover {
    cursor: pointer;
    background-color: white;
    color: #bf119c;
  }
`;
