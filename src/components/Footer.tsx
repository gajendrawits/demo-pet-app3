import foundationLogo from "../assets/images/foundationLogo.jpeg";
import Facebook from "assets/icons/facebook";
import Twitter from "assets/icons/twitter";
import Youtube from "assets/icons/youtube";
import {
  CharityLogo,
  CrossLine,
  EstablishmentWrapper,
  FooterDetailsWrapper,
  FooterHeading,
  FooterMainWrapper,
  FooterSubWrapper,
  FoundationLogo,
  Heading,
  LeftFooterWrapper,
  RightFooterWrapper,
  SocialMediaWrapper,
  Span,
} from "styles/components/footer";

const Footer = () => {
  return (
    <FooterMainWrapper>
      <FooterSubWrapper>
        <LeftFooterWrapper>
          <FoundationLogo src={foundationLogo} />
          <FooterHeading>
            The Petfinder Foundation has given more than $25 million in cash and
            product grants to help organizations save the lives of pets in need.
          </FooterHeading>
        </LeftFooterWrapper>
        <RightFooterWrapper>
          <CharityLogo src="https://i0.wp.com/petfinderfoundation.com/wp-content/uploads/2021/12/charity-navigator-logo.png?w=500&ssl=1" />
          <FooterDetailsWrapper>
            <Span>Contact Us</Span>
            <Span>About Us</Span>
            <Span>Privacy Policy</Span>
            <Span>Address</Span>
          </FooterDetailsWrapper>
        </RightFooterWrapper>
      </FooterSubWrapper>
      <CrossLine></CrossLine>
      <EstablishmentWrapper>
        <Heading>
          The Petfinder Foundation is a 501(c)(3) nonprofit organization,
          federal tax ID #87-0694641
        </Heading>
        <SocialMediaWrapper>
          <Facebook />
          <Twitter />
          <Youtube />
        </SocialMediaWrapper>
      </EstablishmentWrapper>
    </FooterMainWrapper>
  );
};

export default Footer;
