import styled from "styled-components";

export const NavbarMainWrapper = styled.div`
  position: fixed;
  top: 0px;
  width: 100%;
  max-width: 100vw;
  z-index: 1000;
  background-color: white;
`;

export const SubNavbarWrapper = styled.div`
  border-top: 2px solid #5f249f;
  border-bottom: 2px solid #5f249f;
`;

export const Logo = styled.img`
  cursor: pointer;
`;

export const MainNavbarOptionWrapper = styled.div`
  display: flex;
  padding: 1.563vw;
  align-items: center;
  justify-content: space-between;
`;

export const SubNavbarOptionWrapper = styled.div`
  width: 100%;
  max-width: 59.896vw;
`;

export const ContentCombine = styled.div`
  display: flex;
  gap: 4.167vw;
  height: 1.042vw;
  justify-content: flex-end;
  align-items: center;
`;

export const Span = styled.span`
  color: #00205b;
  font-weight: bold;
  :hover {
    cursor: pointer;
    border-bottom: 0.156vw solid #00205b;
  }
`;
export const NumberWrapper = styled.span`
  position: absolute;
  top: 1.563vw;
`;

export const SettingLogoSpan = styled.span`
  color: #00205b;
  font-size: x-large;
  font-weight: bold;
  cursor: pointer;
  :hover {
    transform: translate(-10%, -10%);
    transform: scale(1.6) rotate(-5deg);
    transition: all 0.5s ease-in-out;
  }
`;
export const CartWrapper = styled.span`
  color: #00205b;
  font-size: larger;
  font-weight: bold;
  :hover {
    cursor: pointer;
    color: red;
    border-bottom: 0.156rem solid red;
  }
`;
