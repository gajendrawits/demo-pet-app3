import { Link } from "react-router-dom";
import {
  ContentCombine,
  Logo,
  MainNavbarOptionWrapper,
  NavbarMainWrapper,
  Span,
  SubNavbarOptionWrapper,
  SubNavbarWrapper,
} from "styles/components/navbar";

const Navbar = () => {
  return (
    <NavbarMainWrapper>
      <SubNavbarWrapper>
        <MainNavbarOptionWrapper>
          <Logo
            src="https://www.petfinder.com/themes/custom/consumer_react/logo.svg"
            alt="pet-finder"
          />
          <SubNavbarOptionWrapper>
            <ContentCombine>
              <Link to={"/store"}>
                <Span>ADOPT</Span>
              </Link>
              <Span>EVENTS</Span>
              <Span>OUR TEAM</Span>
              <Span>CONTACT</Span>
            </ContentCombine>
          </SubNavbarOptionWrapper>
        </MainNavbarOptionWrapper>
      </SubNavbarWrapper>
    </NavbarMainWrapper>
  );
};

export default Navbar;