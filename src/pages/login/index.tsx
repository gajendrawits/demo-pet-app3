import SignUp from "pages/signUp";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import {
  LoginCredentialsWrapper,
  LoginHeading,
  LoginMainWrappear,
  SignUpButtonHeading,
  SignUpModalWrapper,
  SiteNameParagraph,
  Span,
  SubLoginWrapper,
  UserRegisterWrapper,
} from "styles/pages/login";
import { InputWrapper } from "styles/pages/signUp";

const Login = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <LoginMainWrappear>
      <SubLoginWrapper>
        <LoginHeading>
          Login to <SiteNameParagraph>Pet Store</SiteNameParagraph>
        </LoginHeading>
        <LoginCredentialsWrapper>
          <InputWrapper>
            <TextField
              id="standard-basic"
              label="Username"
              variant="standard"
            />
          </InputWrapper>
          <InputWrapper>
            <TextField
              id="standard-basic"
              label="Password"
              variant="standard"
            />
          </InputWrapper>
          <Button variant="outlined">Login</Button>
        </LoginCredentialsWrapper>

        <UserRegisterWrapper>
          <Span> If not registerd click &nbsp;</Span>
          <SignUpButtonHeading onClick={() => setOpenModal(true)}>
            SignUp
          </SignUpButtonHeading>
        </UserRegisterWrapper>

        <SignUpModalWrapper>
          {openModal && <SignUp status={setOpenModal} />}
        </SignUpModalWrapper>
      </SubLoginWrapper>
    </LoginMainWrappear>
  );
};

export default Login;
