import { Link, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/home");
  };

  return (
    <NavbarMainWrapper>
      <SubNavbarWrapper>
        <MainNavbarOptionWrapper>
          <Logo
            onClick={() => navigateToHome()}
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
