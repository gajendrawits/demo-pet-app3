import styled from "styled-components";

export const StoreMainWrapper = styled.div`
  border: 2px solid #6504b5;
  background-color: #6504b5;
`;

export const StoreSubWrapper = styled.div`
  display: flex;
  width: 1718px;
  margin: 0 auto;
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
  gap: 15px;
  color: white;
  font-weight: bold;
  font-family: "Comfortaa", cursive;
`;
export const AvailabilitySelectBox = styled.select`
  display: flex;
  border-radius: 10px;
  text-transform: capitalize;
`;
export const PaginationMainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 50px;
  padding: 30px;
`;

export const PaginationSubWrapper = styled.div`
  width: 406px;
  height: 570px;
  /* :hover {
    overflow: hidden;
    transform: scale(1.1);
    transition: transform 0.5s ease;
  } */
`;

export const Name = styled.div`
  padding: 20px;
  font-weight: 400;
  font-size: 18px;
  font-size: 1.125rem;
  color: #206ef6;
  font-weight: 700;
  width: 100%;
  max-width: 400px;
`;

export const PetName = styled.div`
  padding: 20px;
  color: #dd2834;
  font-size: 2.5rem;
  width: 100%;
  max-width: 400px;
  text-transform: uppercase;
  font-weight: 900;
`;

export const BuyPetButton = styled.button`
  background-image: linear-gradient(#8614f8 0, #760be0 100%);
  border-radius: 5px;
  border-style: none;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  height: 60px;
  user-select: none;
  margin-left: 30px;
  width: 190px;
  :hover {
    opacity: 0.7;
  }

  @media screen and (max-width: 1000px) {
    .button-69 {
      font-size: 14px;
      height: 55px;
      line-height: 55px;
      width: 150px;
    }
  }
`;

export const PetImage = styled.img`
  width: 406px;
  height: 406px;
`;
