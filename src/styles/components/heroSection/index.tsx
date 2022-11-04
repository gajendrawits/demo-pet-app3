import styled from "styled-components";

export const MainHeroWrapper = styled.div`
  background: url("https://petcolove.org/wp-content/uploads/2016/07/partnership_hero-1.jpg")
    no-repeat center center/cover;
`;

export const SubHeroWrapper = styled.div`
  margin-top: 2px;
  height: 690px;
`;

export const HeroContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 600px;
  gap: 35px;
  justify-content: center;
  align-items: center;
  color: white;
`;

export const HeroHeading = styled.span`
  font-size: 60px;
  /* font-weight: 400; */
  font-family: "Pacifico", cursive;
`;
export const HeroParagraph = styled.span`
  width: 900px;
  font-size: 25px;
  text-align: center;
  font-family: "Comfortaa", cursive;
`;
