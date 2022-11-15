import styled from "styled-components";

export const PetMainWrapper = styled.div`
  display: flex;
  margin-top: 5.208vw;
  justify-content: space-evenly;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2.604vw;
  padding: 1.563vw;
`;

export const PetSubWrapper = styled.div`
  width: 100%;
  max-width: 21.146vw;
  height: 29.688vw;
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
`;

export const PetName = styled.div`
  padding: 1.042vw;
  color: #dd2834;
  font-size: 2.5vw;
  text-transform: uppercase;
  font-weight: 900;
`;

export const PetImage = styled.img`
  width: 100%;
  max-width: 21.146vw;
  height: 21.146vw;
`;

export const MorePetWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  max-width: 21.146vw;
  padding: 0.833vw;
  border-radius: 0.417vw;
  :hover {
    overflow: hidden;
    transform: scale(1.1);
    transition: transform 0.5s ease;
  }
`;
export const MorePetImage = styled.img`
  max-width: 15.938vw;
  width: 100%;
  height: 10.417vw;
`;
export const MeetThemButton = styled.button`
  width: 100%;
  height: 2.604vw;
  font-weight: bold;
  border: none;
  font-size: 1.042vw;
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
  width: 100%;
  max-width: 9.896vw;
  font-size: 1.125vw;

  font-family: "Comfortaa", cursive;
`;
