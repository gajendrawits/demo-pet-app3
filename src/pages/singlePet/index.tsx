import { useLocation } from "react-router-dom";
import { Name, PetName, SinglePetWrapper } from "styles/pages/store";

const SinglePet = () => {
  const { state } = useLocation();
  const data = state;
  return (
    <SinglePetWrapper>
      <Name>Hi! My name is:</Name>
      <PetName>{data?.name}</PetName>
      <Name>Status:</Name>
      <PetName>{data?.status}</PetName>
      <Name>Tag:</Name>
      <PetName>{data?.tags[0]?.name}</PetName>
    </SinglePetWrapper>
  );
};

export default SinglePet;
