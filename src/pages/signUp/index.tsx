import { useForm } from "react-hook-form";
import {
  CancelButtonWrapper,
  CancelSignUpButton,
  CombineWrapper,
  ErrorMessageParagraph,
  Form,
  Heading,
  InputWrapper,
  Label,
  LeftWrapper,
  RightWrapper,
  SideNameWrapper,
  SignUpButton,
  SignUpInput,
  SignUpMainWrapper,
  SubSignUpWrapper,
} from "styles/pages/signUp";

interface myProps {
  status: (setOpenModa: boolean) => void;
}

const SignUp = (props: myProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => console.log(data);
  return (
    <SignUpMainWrapper>
      <SubSignUpWrapper>
        <SideNameWrapper>
          <Heading>Sign Up</Heading>
        </SideNameWrapper>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <CombineWrapper>
            <LeftWrapper>
              <InputWrapper>
                <Label>Username</Label>
                <SignUpInput
                  type="text"
                  {...register("username", {
                    required: true,
                    maxLength: 12,
                  })}
                />
              </InputWrapper>
              {errors.username && (
                <ErrorMessageParagraph>
                  Please enter username
                </ErrorMessageParagraph>
              )}
              <InputWrapper>
                <Label>First Name</Label>
                <SignUpInput
                  type="text"
                  {...register("firstname", {
                    required: true,
                    maxLength: 10,
                  })}
                />
              </InputWrapper>
              {errors.firstname && (
                <ErrorMessageParagraph>
                  Please enter firstname
                </ErrorMessageParagraph>
              )}
              <InputWrapper>
                <Label>Password</Label>
                <SignUpInput
                  type="password"
                  {...register("password", {
                    required: true,
                    maxLength: 16,
                  })}
                />
              </InputWrapper>
              {errors.password && (
                <ErrorMessageParagraph>
                  Please enter password
                </ErrorMessageParagraph>
              )}
            </LeftWrapper>
            <RightWrapper>
              <InputWrapper>
                <Label>Email</Label>
                <SignUpInput
                  type="email"
                  {...register("email", {
                    required: true,
                    maxLength: 36,
                  })}
                />
              </InputWrapper>
              {errors.email && (
                <ErrorMessageParagraph>
                  Please enter email
                </ErrorMessageParagraph>
              )}
              <InputWrapper>
                <Label>Last Name</Label>
                <SignUpInput
                  type="text"
                  {...register("lastname", {
                    required: true,
                    maxLength: 10,
                  })}
                />
              </InputWrapper>
              {errors.lastname && (
                <ErrorMessageParagraph>
                  Please enter lastname
                </ErrorMessageParagraph>
              )}
              <InputWrapper>
                <Label>Phone No.</Label>
                <SignUpInput
                  type="text"
                  {...register("phonenumber", {
                    required: true,
                    maxLength: 10,
                  })}
                />
              </InputWrapper>
              {errors.phonenumber && (
                <ErrorMessageParagraph>
                  Please enter phonenumber
                </ErrorMessageParagraph>
              )}
            </RightWrapper>
          </CombineWrapper>
          <CancelButtonWrapper>
            <SignUpButton type="submit">Sign Up</SignUpButton>
            <CancelSignUpButton
              onClick={() => {
                props.status(false);
              }}
            >
              Cancel
            </CancelSignUpButton>
          </CancelButtonWrapper>
        </Form>
      </SubSignUpWrapper>
    </SignUpMainWrapper>
  );
};

export default SignUp;
