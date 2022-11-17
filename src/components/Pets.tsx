import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "services/instance";
import {
  AvailablePetHeading,
  MeetThemButton,
  MorePetImage,
  MorePetWrapper,
  Name,
  PetImage,
  PetMainWrapper,
  PetName,
  PetSubWrapper,
} from "styles/components/pets";
import Loader from "./Loader";

const Pets = () => {
  interface Pet {
    id?: number;
    name: string;
    breed: string;
    photoUrls: string;
  }

  const navigate = useNavigate();

  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(true);

  const newData = data.slice(0, 7);

  useEffect(() => {
    api.get("/pet/findByStatus?status=available").then((response) => {
      setData(response.data);
      setLoading(false);
    });
  }, []);

  const goToStore = () => {
    navigate("/store");
  };

  return (
    <PetMainWrapper>
      {newData.map((value: Pet, index: number) => {
        return (
          <PetSubWrapper key={index}>
            <PetImage src={value.photoUrls} alt="" />
            <Name>Hi! My name is:</Name>
            <PetName>{value.name}</PetName>
          </PetSubWrapper>
        );
      })}
      <MorePetWrapper>
        {loading ? <Loader /> : null}
        <MorePetImage src="https://static.vecteezy.com/system/resources/previews/005/484/042/original/dog-logo-illustration-free-vector.jpg" />
        <AvailablePetHeading>
          {data.length} more pets available on Petfinder
        </AvailablePetHeading>
        <MeetThemButton onClick={() => goToStore()}>Meet Them</MeetThemButton>
      </MorePetWrapper>
    </PetMainWrapper>
  );
};

export default Pets;
