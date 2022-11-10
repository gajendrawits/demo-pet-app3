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
  gap: 50px;
  padding: 30px;
`;

export const PaginationSubWrapper = styled.div`
  width: 406px;
  height: 570px;
  :hover {
    overflow: hidden;
    transform: scale(1.1);
    transition: transform 0.5s ease;
  }
`;

export const Name = styled.div`
  padding: 20px;
  font-weight: 400;
  font-size: 18px;
  font-size: 1.125rem;

  color: #206ef6;
  font-weight: 700;
`;

export const PetName = styled.div`
  padding: 20px;
  color: #dd2834;
  font-size: 2.5rem;
  text-transform: uppercase;
  font-weight: 900;
`;

export const PetBreed = styled.div`
  padding: 20px;
  font-weight: 400;
  font-size: 18px;
  font-size: 1.125rem;
  color: #333333;
`;

export const PetImage = styled.img`
  width: 406px;
  height: 406px;
`;
