import SignUp from "pages/signUp";
import axios from "axios";
import * as yup from "yup";
import { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ErrorMessage, InputWrapper } from "styles/pages/signUp";
import {
  LoginCredentialsWrapper,
  LoginHeading,
  LoginMainWrapper,
  SignUpButtonHeading,
  SignUpModalWrapper,
  SiteNameParagraph,
  Span,
  SubLoginWrapper,
  UserRegisterWrapper,
} from "styles/pages/login";

const Login = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Please enter a vaild email")
      .required("Email required"),
    password: yup
      .string()
      .required("Please Enter your password")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    axios
      .post("https://sql-dev-india.thewitslab.com:3003/auth/login", {
        email: data.email,
        password: data.password,
      })
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        let token = localStorage.getItem("token");
        token ? navigate("/home") : navigate("/");
      });
  };

  useEffect(() => {
    if (localStorage.getItem("token")) navigate("/home");
  });

  return (
    <LoginMainWrapper>
      <SubLoginWrapper>
        <LoginHeading>
          Login to <SiteNameParagraph>Pet Store</SiteNameParagraph>
        </LoginHeading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <LoginCredentialsWrapper>
            <InputWrapper>
              <TextField
                id="standard-basic"
                label="Email"
                variant="standard"
                {...register("email")}
              />
            </InputWrapper>
            {/* @ts-ignore */}
            <ErrorMessage>{errors?.email?.message}</ErrorMessage>
            <InputWrapper>
              <TextField
                id="standard-basic"
                label="Password"
                type="password"
                variant="standard"
                {...register("password")}
              />
              {/* @ts-ignore */}
              <ErrorMessage>{errors?.password?.message}</ErrorMessage>
            </InputWrapper>
            <Button variant="outlined" type="submit">
              Login
            </Button>
          </LoginCredentialsWrapper>
        </form>

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
    </LoginMainWrapper>
  );
};

export default Login;
