import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AvailablePetHeading,
  MeetThemButton,
  MorePetImage,
  MorePetWrapper,
  Name,
  PetBreed,
  PetImage,
  PetMainWrapper,
  PetName,
  PetSubWrapper,
} from "styles/components/pets";

const Pets = () => {
  interface Pet {
    id?: number;
    name: string;
    breed: string;
    photoUrls: string;
  }

  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const newData = data.slice(0, 7);

  const url =
    "https://petstore.swagger.io/v2/pet/findByStatus?status=available";

  useEffect(() => {
    axios.get(url).then((response) => {
      setData(response.data);
    });
  }, [url]);

  const goToStore = () => {
    navigate("/store");
  };

  // const filteredData = (data: any) => {
  //   const res = data.filter(
  //     (val: any, index: any) =>
  //       val.photoUrls.length >= 1 && val.photoUrls !== "string"
  //   );
  //   console.log(res);
  // };
  // filteredData(data);

  return (
    <PetMainWrapper>
      {newData.map((value: Pet, index: number) => {
        return (
          <PetSubWrapper key={index}>
            <PetImage src={value.photoUrls} alt="" />
            <Name>Hi! My name is:</Name>
            <PetName>{value.name}</PetName>
            <PetBreed>{value.breed}</PetBreed>
          </PetSubWrapper>
        );
      })}
      <MorePetWrapper>
        <MorePetImage src="https://static.vecteezy.com/system/resources/previews/005/484/042/original/dog-logo-illustration-free-vector.jpg" />
        <AvailablePetHeading>
          89 more pets available on Petfinder
        </AvailablePetHeading>
        <MeetThemButton onClick={() => goToStore()}>Meet Them</MeetThemButton>
      </MorePetWrapper>
    </PetMainWrapper>
  );
};

export default Pets;
