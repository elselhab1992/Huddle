import styled from "@emotion/styled";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 40px 80px;
`;

export const Logo = styled.img`
  width: 15%;
`;

export const Button = styled.button`
  width: 10%;
  font-size: 16px;
  padding: 10px;
  border-radius: 30px;
  color: #bf119c;
  background-color: white;
  border: 1px solid #bf119c;
  &:hover {
    cursor: pointer;
    background-color: #bf119c;
    color: white;
  }
`;
