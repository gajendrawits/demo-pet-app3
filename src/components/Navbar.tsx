import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { IoSettingsOutline } from "react-icons/io5";
import { SlHandbag } from "react-icons/sl";
import LogOut from "pages/logOut";
import {
  CartWrapper,
  ContentCombine,
  Logo,
  MainNavbarOptionWrapper,
  NavbarMainWrapper,
  NumberWrapper,
  SettingLogoSpan,
  Span,
  SubNavbarOptionWrapper,
  SubNavbarWrapper,
} from "styles/components/navbar";

const Navbar = () => {
  const navigate = useNavigate();

  const [open, setOpen] = useState<boolean>(false);

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
              <SettingLogoSpan onClick={() => setOpen(!open)}>
                <IoSettingsOutline />
              </SettingLogoSpan>
              {open && <LogOut status={setOpen} />}
            </ContentCombine>
          </SubNavbarOptionWrapper>
        </MainNavbarOptionWrapper>
      </SubNavbarWrapper>
    </NavbarMainWrapper>
  );
};
export default Navbar;
