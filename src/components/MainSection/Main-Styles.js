import styled from "@emotion/styled";

export const Div = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px auto;
  color: #0a3033;
`;

export const Heading = styled.h1`
  font-size: 40px;
  font-weight: bold;
`;

export const Paragraph = styled.p`
  font-size: 20px;
  text-align: center;
`;

export const Button = styled.b`
  width: 30%;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  padding: 20px;
  border-radius: 40px;
  color: white;
  background-color: #bf119c;
  border: 1px solid #bf119c;
  &:hover {
    cursor: pointer;
    background-color: white;
    color: #bf119c;
  }
`;
