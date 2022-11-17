import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Name,
  PaginationSubWrapper,
  PetImage,
  PetName,
} from "styles/pages/store";
import api from "../../services/instance";

const SinglePet = () => {
  const { id } = useParams();
  console.log(id, "id");

  const [post, setSingle] = useState<any>();
  console.log(post, "post");

  useEffect(() => {
    api.get(`/pet/${id}`).then((response) => {
      setSingle(response.data);
    });
  }, [id]);

  return (
    <div>
      <PaginationSubWrapper>
        <Name>Hi! My name is:</Name>
        <PetName>{post.name}</PetName>
        <PetImage src={post.photoUrls} alt="" />
        {/* <BuyPetButton onClick={() => dispatch(addPet(value))}>
          Buy Pet
        </BuyPetButton> */}
      </PaginationSubWrapper>
    </div>
  );
};

export default SinglePet;
