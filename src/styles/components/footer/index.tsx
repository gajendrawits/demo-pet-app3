import styled from "styled-components";

export const FooterMainWrapper = styled.div`
  background-color: #2e0152;
`;

export const FooterSubWrapper = styled.div`
  width: 100%;
  width: 80vw;
  padding: 2.083vw 0;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;
export const FoundationLogo = styled.img`
  display: flex;
`;

export const LeftFooterWrapper = styled.div``;

export const RightFooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-end;
`;

export const FooterHeading = styled.h5`
  color: white;
  margin-top: 1.563vw;
  font-weight: 400;
  width: 100%;
  max-width: 26.927vw;
  text-align: initial;
  font-family: "Comfortaa", cursive;
`;

export const FooterDetailsWrapper = styled.div`
  display: flex;
  gap: 2.604vw;
  justify-content: flex-end;
  width: 100%;
  max-width: 33.854vw;
  flex-wrap: wrap;
`;

export const Span = styled.span`
  color: white;
  font-family: "Comfortaa";
  font-weight: 800;
  font-size: 1.042rem;
  cursor: pointer;
  :hover {
    overflow: hidden;
    transform: scale(1.1);
    color: #c6c637;
    transition: transform 0.5s ease;
  }
`;
export const CharityLogo = styled.img`
  width: 100%;
  max-width: 20.833vw;
  display: flex;
`;

export const CrossLine = styled.div`
  height: 0.1vw;
  background-color: white;
  margin: 0 auto;
  width: 100%;
  max-width: 80vw;
`;

export const EstablishmentWrapper = styled.div`
  width: 100%;
  max-width: 80vw;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Heading = styled.h5`
  color: white;
  font-family: "Comfortaa", cursive;
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
  gap: 1.302vw;
  svg {
    width: 100%;
    max-width: 1.042vw;
    height: 1.563vw;
  }
`;

export const Logo = styled.div``;
