import styled from "styled-components";

export const LogOutMainWrapper = styled.div`
  position: absolute;
  width: 100%;
  max-width: 20.833vw;
  top: 65%;
  right: 3%;
  height: 23.438vw;
  border-top-left-radius: 0.521vw;
  border-bottom-left-radius: 0.521vw;
  background-color: #2e0152;
`;

export const LogOutSubWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-end;
  height: 11.979vw;
  justify-content: space-around;
`;

export const LogOutHeading = styled.h1`
  color: #ff8080;
  width: 100%;
  font-family: "Comfortaa";
  font-size: 1.9vw;
  margin: 0 auto;
`;

export const LogOutButton = styled.button`
  margin: 0 auto;
  border: none;
  color: white;
  background-color: #573b8a;
  padding: 5px;
  font-size: 0.9vw;
  cursor: pointer;
`;

export const CancelButton = styled.button`
  margin-right: 0.625vw;
  border: none;
  font-size: 0.9vw;
  padding: 0.417vw;
  border-radius: 2px;
  cursor: pointer;
  :hover {
    background-color: #ff8080;
  }
`;
