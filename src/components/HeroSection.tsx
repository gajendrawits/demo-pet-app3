import {
  HeroContentWrapper,
  HeroHeading,
  HeroParagraph,
  MainHeroWrapper,
  SubHeroWrapper,
} from "styles/components/heroSection";

const HeroSection = () => {
  return (
    <MainHeroWrapper>
      <SubHeroWrapper>
        <HeroContentWrapper>
          <HeroHeading>For Our Lifesaving Partners</HeroHeading>
          <HeroParagraph>
            We believe that helping pets live their best lives possible begins
            with creating lifesaving communities across the country. And our
            love for animals is why we seek to partner with organizations that
            share our commitment to creating a lifesaving nation. Let Petco Love
            provide your organization with the support needed to make this
            happen. Together, let’s do this.
          </HeroParagraph>
        </HeroContentWrapper>
      </SubHeroWrapper>
    </MainHeroWrapper>
  );
};

export default HeroSection;
