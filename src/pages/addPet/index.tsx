import {
  AddPetLebel,
  Button,
  Input,
  MainAddPetWrapper,
  SubAddPetWrapper,
} from "styles/pages/addPet";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import api from "services/instance";
import { ErrorMessage } from "styles/pages/signUp";

interface myProps {
  status: (setOpenModa: boolean) => void;
}
const AddPetModal = (props: myProps) => {
  const schema = yup.object().shape({
    name: yup.string().required("Name is mandatory"),
    image: yup
      .string()
      .required("Image is mandatory")
      .matches(
        /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)$/,
        "Enter valid url"
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
    api
      .post("/pet", {
        name: data.name,
        image: data.image,
        availability: data.availavility,
      })
      .then((response) => {
        let i = document.getElementById("add");
        console.log(i, "iiiii");
        if (response.status === 200) {
          if (i) i.style.backgroundColor = "#2ecc71";
        } else {
          alert("Error occured");
        }
      });
  };

  return (
    <MainAddPetWrapper>
      <SubAddPetWrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <AddPetLebel aria-hidden="true">Add New Pet</AddPetLebel>
          <Input type="text" {...register("name")} placeholder="Name" />
          {/* @ts-ignore */}
          <ErrorMessage>{errors?.name?.message}</ErrorMessage>
          <Input type="text" {...register("image")} placeholder="Image Src" />
          {/* @ts-ignore */}
          <ErrorMessage>{errors?.image?.message}</ErrorMessage>
          <Input
            type="text"
            {...register("availablility")}
            placeholder="Availablility"
          />
          <Button id="add">Add</Button>
        </form>
        <Button
          onClick={() => {
            props.status(false);
          }}
        >
          Cancel
        </Button>
      </SubAddPetWrapper>
    </MainAddPetWrapper>
  );
};

export default AddPetModal;
