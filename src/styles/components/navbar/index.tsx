import styled from "styled-components";

export const NavbarMainWrapper = styled.div`
  max-width: 1920px;
  margin: 0 auto;
`;

export const SubNavbarWrapper = styled.div`
  border-top: 2px solid #5f249f;
  border-bottom: 2px solid #5f249f; ;
`;

export const Logo = styled.img`
  cursor: pointer;
`;

export const MainNavbarOptionWrapper = styled.div`
  display: flex;
  padding: 30px;
  align-items: center;
  justify-content: space-between;
`;

export const SubNavbarOptionWrapper = styled.div`
  width: 1150px;
`;

export const ContentCombine = styled.div`
  display: flex;
  gap: 80px;
  height: 20px;
  justify-content: flex-end;
`;

export const Span = styled.span`
  color: #00205b;
  font-weight: bold;
  :hover {
    cursor: pointer;
    border-bottom: 3px solid #00205b;
  }
`;
