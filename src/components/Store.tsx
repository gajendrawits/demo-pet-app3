import {
  LeftStoreWrapper,
  RightStoreWrapper,
  StoreMainWrapper,
  StoreSubWrapper,
} from "styles/components/store";
import Navbar from "./Navbar";

const Store = () => {
  return (
    <>
      <Navbar />
      <StoreMainWrapper>
        <StoreSubWrapper>
          <LeftStoreWrapper></LeftStoreWrapper>
          <RightStoreWrapper></RightStoreWrapper>
        </StoreSubWrapper>
      </StoreMainWrapper>
    </>
  );
};

export default Store;
