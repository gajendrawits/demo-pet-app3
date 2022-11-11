import { ADD_PET } from "./petTypes";

const addPet = (pet: any) => {
  return {
    type: ADD_PET,
    payload: pet,
  };
};

export default addPet;
