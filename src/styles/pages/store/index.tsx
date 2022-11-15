import styled from "styled-components";

export const StoreMainWrapper = styled.div`
  border: 2px solid #6504b5;
  background-color: #6504b5;
`;

export const StoreSubWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: 100px 80px 0px 80px;
  max-width: 89.479vw;
  border: 2px solid #6504b5;
  justify-content: space-between;
  align-items: center;
`;

export const StoreLogo = styled.img`
  background-color: #fff;
  border-radius: 50%;
`;

export const LeftStoreWrapper = styled.div``;

export const RightStoreWrapper = styled.div`
  display: flex;
  gap: 0.781vw;
  color: white;
  font-weight: bold;
  font-family: "Comfortaa", cursive;
`;
export const AvailabilitySelectBox = styled.select`
  display: flex;
  border-radius: 0.521vw;
  text-transform: capitalize;
`;
export const PaginationMainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 2.604vw;
  padding: 1.563vw;
`;

export const PaginationSubWrapper = styled.div`
  width: 100%;
  max-width: 21.146vw;
  :hover {
    overflow: hidden;
    transform: scale(1.1);
    transition: transform 0.5s ease;
  }
`;

export const Name = styled.div`
  padding: 1.042vw;
  font-weight: 400;
  font-size: 0.938vw;
  font-size: 1.125vw;
  color: #206ef6;
  font-weight: 700;
  width: 100%;
  max-width: 20.833vw;
`;

export const PetName = styled.div`
  padding: 1.042vw;
  color: #dd2834;
  font-size: 2.5vw;
  width: 100%;
  max-width: 20.833vw;
  text-transform: uppercase;
  font-weight: 900;
`;

export const BuyPetButton = styled.button`
  background-image: linear-gradient(#8614f8 0, #760be0 100%);
  border-radius: 0.26vw;
  border-style: none;
  color: #fff;
  cursor: pointer;
  font-size: 0.833vw;
  height: 3.125vw;
  user-select: none;
  margin-left: 1.563vw;
  width: 100%;
  max-width: 9.896vw;
  :hover {
    opacity: 0.7;
  }

  @media screen and (max-width: 52.083vw) {
    .button-69 {
      font-size: 0.729vw;
      height: 2.865vw;
      width: 100%;
      max-width: 7.813vw;
    }
  }
`;

export const PetImage = styled.img`
  width: 21.146vw;
  height: 21.146vw;
`;
