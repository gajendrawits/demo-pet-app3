import React from "react";
import { useSelector } from "react-redux";
import { CartMainWrapper, Heading } from "styles/pages/cart";

const Cart = () => {
  const selector = useSelector((state: any) => state.cartPet.totalPets);

  return (
    <CartMainWrapper>
      <Heading>Pets in cart:- {selector.length}</Heading>
    </CartMainWrapper>
  );
};

export default Cart;
