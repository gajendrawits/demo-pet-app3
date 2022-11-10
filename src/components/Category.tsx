import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
import Footer from "./Footer";
import Navbar from "./Navbar";

const Category = () => {
  interface Pet {
    id?: number;
    name: string;
    photoUrls: string;
  }
  const { category } = useParams();

  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(true);

  const filteredData = data.filter((value: Pet) => value.name === category);

  const url =
    "https://petstore.swagger.io/v2/pet/findByStatus?status=available";

  useEffect(() => {
    axios.get(url).then((response) => {
      setData(response.data);
      setLoading(false);
    });
  }, [url]);

  return (
    <div>
      <Navbar />
      {loading ? <h1>Loading...</h1> : null}
      <PetMainWrapper>
        {filteredData.map((value: Pet, index: number) => {
          return (
            <PetSubWrapper key={index}>
              <PetImage src={value.photoUrls} alt="" />
              <Name>Hi! My name is:</Name>
              <PetName>{value.name}</PetName>
            </PetSubWrapper>
          );
        })}
      </PetMainWrapper>
      <Footer />
    </div>
  );
};

export default Category;
