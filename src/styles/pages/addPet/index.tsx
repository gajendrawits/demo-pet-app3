import styled from "styled-components";

export const MainAddPetWrapper = styled.div`
  width: 350px;
  margin: 10px auto;
  height: 510px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 5px 20px 50px #000;
`;

export const SubAddPetWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const AddPetLebel = styled.label`
  color: #fff;
  font-size: 2.3em;
  justify-content: center;
  display: flex;
  margin: 60px;
  font-weight: bold;
`;

export const Input = styled.input`
  width: 200px;
  background: #e0dede;
  justify-content: center;
  display: flex;
  margin: 20px auto;
  padding: 10px;
  border: none;
  outline: none;
  border-radius: 5px;
`;

export const Button = styled.button`
  width: 180px;
  height: 40px;
  margin: 10px auto;
  justify-content: center;
  display: block;
  color: #fff;
  background-color: #573b8a;
  font-size: 1em;
  margin-top: 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
