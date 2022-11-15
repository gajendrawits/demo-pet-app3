import styled from "styled-components";

export const SignUpMainWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 25.444vw;
`;

export const SideNameWrapper = styled.div`
  display: flex;
  height: 25.444vw;
  border-radius: 0.556vw;
  align-items: center;
  background-color: cadetblue;
`;
export const SubSignUpWrapper = styled.div`
  display: flex;
  background-color: whitesmoke;
  border-radius: 0.347vw;
  align-items: center;
`;

export const Form = styled.form``;

export const ErrorMessage = styled.p`
  color: red;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0.347vw;
`;

export const LeftWrapper = styled.div`
  min-height: 18.056vw;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const RightWrapper = styled.div`
  max-height: 18.056vw;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const Heading = styled.h1`
  padding: 0.417vw;
  font-weight: 400;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
`;

export const CombineWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 46.833vw;
  justify-content: space-evenly;
`;
export const Label = styled.label`
  font-family: initial;
`;

export const SignUpInput = styled.input`
  width: 15.278vw;
  padding: 0.694vw 1.042vw 2px;
  border-radius: 0.556vw;
  border: 1px solid;
`;

export const ErrorMessageParagraph = styled.p`
  color: red;
  font-size: 0.833vw;
  font-family: initial;
`;

export const SignUpButton = styled.button`
  border-radius: 0.433vw;
  border: none;
  color: white;
  background-color: #04aa6d;
  cursor: pointer;
`;

export const CancelButtonWrapper = styled.div`
  display: flex;
  width: 38.542vw;

  justify-content: space-between;
  margin-left: 3.988vw;
`;

export const CancelSignUpButton = styled.button`
  border-radius: 0.403vw;
  border: none;
  cursor: pointer;
  color: white;
  background-color: #be4e46;
`;
