import { Link, useNavigate } from "react-router-dom";
import {
  CartWrapper,
  ContentCombine,
  Logo,
  MainNavbarOptionWrapper,
  NavbarMainWrapper,
  NumberWrapper,
  Span,
  SubNavbarOptionWrapper,
  SubNavbarWrapper,
} from "styles/components/navbar";
import { SlHandbag } from "react-icons/sl";

import { useSelector } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();

  const selector = useSelector((state: any) => state.cartPet.totalPets);

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
              <Link style={{ textDecoration: "none" }} to={"/store"}>
                <Span>ADOPT</Span>
              </Link>
              <Link style={{ textDecoration: "none" }} to={"/home/fish"}>
                <Span>FISH</Span>
              </Link>
              <Link style={{ textDecoration: "none" }} to={"/home/doggie"}>
                <Span>DOG</Span>
              </Link>
              <Link to={"/cart"}>
                <CartWrapper>
                  <SlHandbag />
                  <NumberWrapper>{selector.length}</NumberWrapper>
                </CartWrapper>
              </Link>
            </ContentCombine>
          </SubNavbarOptionWrapper>
        </MainNavbarOptionWrapper>
      </SubNavbarWrapper>
    </NavbarMainWrapper>
  );
};
export default Navbar;
