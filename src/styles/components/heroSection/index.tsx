import styled from "styled-components";

export const MainHeroWrapper = styled.div`
  background: url("https://petcolove.org/wp-content/uploads/2016/07/partnership_hero-1.jpg")
    no-repeat center center/cover;
`;

export const SubHeroWrapper = styled.div`
  margin-top: 2px;
  height: 35.938vw;
`;

export const HeroContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 31.25vw;
  gap: 1.823vw;
  justify-content: center;
  align-items: center;
  color: white;
`;

export const HeroHeading = styled.span`
  font-size: 1.823vw;
  font-family: "Pacifico";
`;
export const HeroParagraph = styled.span`
  width: 100%;
  max-width: 46.875vw;
  font-size: 1.302vw;
  text-align: center;
  font-family: "Comfortaa", cursive;
`;
