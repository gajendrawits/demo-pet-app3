import styled from "styled-components";

export const CartMainWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 80vw;
`;
export const CartSubWrapper = styled.div``;

export const CartDetailsWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  max-width: 70vw;
  justify-content: space-between;
  align-items: center;
`;

export const Image = styled.img`
  max-height: 100px;
  padding: 20px;
  border-radius: 25px;
`;

export const PetIdSpan = styled.span`
  color: #dd2834;
  width: 100%;
  max-width: 209px;
  display: flex;
`;

export const PetNameSpan = styled.span`
  color: #dd2834;
  display: flex;
  width: 100%;
  max-width: 120px;
  text-transform: uppercase;
`;
export const Heading = styled.h5`
  color: #206ef6;
  font-weight: 900;
`;

export const PetStatusSpan = styled.span`
  color: green;
  width: 100%;
  max-width: 120px;
  display: flex;
  text-transform: uppercase;
  font-weight: 800;
`;

export const Button = styled.button`
  padding: 10px;
  border: none;
  :hover {
    color: red;
  }
`;
