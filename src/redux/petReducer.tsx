import { ADD_PET, REMOVE_PET } from "./petTypes";

const initialState = {
  totalPets: [],
};

const cartReducer = (state = initialState, action: any) => {
  console.log(action.payload, "dt");
  switch (action.type) {
    case ADD_PET:
      const find = state.totalPets?.find((item: any) =>
        item.id === action.payload.id ? true : false
      );
      return {
        ...state,
        totalPets: find
          ? state.totalPets
          : [...state.totalPets, action.payload],
      };
    case REMOVE_PET:
      return {
        ...state,
        totalPets: state.totalPets.filter((value: any) => {
          return value !== action.payload;
        }),
      };
    default:
      return state;
  }
};

export default cartReducer;
