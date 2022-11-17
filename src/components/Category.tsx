import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "services/instance";
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

  useEffect(() => {
    api.get("/pet/findByStatus?status=available").then((response) => {
      setData(response.data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Navbar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <PetMainWrapper>
          {loading ? <Loader /> : null}
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
      </div>
      <Footer />
    </>
  );
};

export default Category;
