import { ADD_PET } from "./petTypes";

import { REMOVE_PET } from "./petTypes";

export const addPet = (pet: any) => {
  return {
    type: ADD_PET,
    payload: pet,
  };
};

export const removePet = (pet: any) => {
  return {
    type: REMOVE_PET,
    payload: pet,
  };
};
