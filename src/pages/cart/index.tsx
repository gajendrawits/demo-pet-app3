import { useDispatch, useSelector } from "react-redux";
import { removePet } from "redux/petAction";
import {
  Button,
  CartDetailsWrapper,
  CartMainWrapper,
  H5,
  Image,
} from "styles/pages/cart";

const Cart = () => {
  const selector = useSelector((state: any) => state.cartPet.totalPets);
  console.log(selector, "ll");
  const dispatch = useDispatch();

  return (
    <CartMainWrapper>
      <h1> {selector.length < 1 ? "Your cart is empty" : "Cart"}</h1>
      {selector.map((value: any, index: number) => (
        <CartDetailsWrapper key={index}>
          <Image src={value.image} alt={value.title} />
          <H5>{`Id: ${value.id}`}</H5>
          <H5>{`Name: ${value.name}`}</H5>
          <H5>{`Status: ${value.status}`}</H5>
          <Button onClick={() => dispatch(removePet(value))}> Remove</Button>
        </CartDetailsWrapper>
      ))}
    </CartMainWrapper>
  );
};

export default Cart;
