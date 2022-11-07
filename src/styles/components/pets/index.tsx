import styled from "styled-components";

export const PetMainWrapper = styled.div`
  border: 1px solid red;
  display: flex;
  border: 1px solid red;
  /* width: 1440px; */
  flex-direction: row;
  flex-wrap: wrap;
  gap: 50px;
  padding: 30px;
`;

export const PetSubWrapper = styled.div`
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
export const MorePetWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 406px;
  padding: 16px;
  border-radius: 8px;
  :hover {
    overflow: hidden;
    transform: scale(1.1);
    transition: transform 0.5s ease;
  }
`;
export const MorePetImage = styled.img`
  width: 306px;
  height: 200px;
`;
export const MeetThemButton = styled.button`
  width: 100%;
  height: 50px;
  font-weight: bold;
  border: none;
  font-size: 20px;
  color: #206ef6;
  text-transform: uppercase;
  font-family: "Comfortaa", cursive;
  background-color: transparent;
  cursor: pointer;
  :hover {
    color: white;
    background-color: #dd2834;
  }
`;
export const AvailablePetHeading = styled.div`
  width: 190px;
  font-family: "Comfortaa", cursive;
`;
