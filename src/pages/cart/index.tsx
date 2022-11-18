import { useDispatch, useSelector } from "react-redux";
import { removePet } from "redux/petAction";
import {
  Button,
  CartDetailsWrapper,
  CartMainWrapper,
  CartSubWrapper,
  Heading,
  Image,
  PetIdSpan,
  PetNameSpan,
  PetStatusSpan,
} from "styles/pages/cart";

const Cart = () => {
  const selector = useSelector((state: any) => state.cartPet.totalPets);
  const dispatch = useDispatch();

  return (
    <CartMainWrapper>
      <h1>
        {selector.length < 1 ? (
          <h3 style={{ color: "red" }}>Your cart is empty</h3>
        ) : (
          <h3 style={{ color: "green" }}>Cart</h3>
        )}
      </h1>
      <CartSubWrapper>
        {selector.map((value: any, index: number) => (
          <CartDetailsWrapper key={index}>
            <Image src={value.photoUrls} alt={value.title} />
            <Heading>Id:</Heading>
            <PetIdSpan>{value.id}</PetIdSpan>
            <Heading>Name:</Heading>
            <PetNameSpan>{value.name}</PetNameSpan>
            <Heading>Status:</Heading>
            <PetStatusSpan>{value.status}</PetStatusSpan>
            <Button onClick={() => dispatch(removePet(value))}> Remove</Button>
          </CartDetailsWrapper>
        ))}
      </CartSubWrapper>
    </CartMainWrapper>
  );
};

export default Cart;
