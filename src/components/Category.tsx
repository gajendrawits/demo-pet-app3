import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Name,
  PetImage,
  PetMainWrapper,
  PetName,
  PetSubWrapper,
} from "styles/components/pets";
import Footer from "./Footer";
import Loader from "./Loader";
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
    <>
      <Navbar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {loading ? <Loader /> : null}
      </div>
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
    </>
  );
};

export default Category;
