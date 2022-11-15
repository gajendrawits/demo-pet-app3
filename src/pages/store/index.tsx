import {
  AvailabilitySelectBox,
  LeftStoreWrapper,
  Name,
  PaginationMainWrapper,
  PaginationSubWrapper,
  BuyPetButton,
  PetImage,
  PetName,
  RightStoreWrapper,
  StoreLogo,
  StoreMainWrapper,
  StoreSubWrapper,
} from "styles/pages/store";
import "../../App.css";
import axios from "axios";
import Navbar from "../../components/Navbar";
import dog from "../../assets/images/dog.png";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Footer from "components/Footer";
import Loader from "components/Loader";
import { addPet } from "../../redux/petAction";
import { useDispatch } from "react-redux";

const Store = () => {
  interface Pet {
    id?: number;
    name: string;
    breed: string;
    photoUrls: string;
  }

  const [data, setData] = useState([]);

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  const url =
    "https://petstore.swagger.io/v2/pet/findByStatus?status=available";

  useEffect(() => {
    axios.get(url).then((response) => {
      setData(response.data);
      setLoading(false);
    });
  }, [url]);

  const [pageNumber, setPageNumber] = useState(0);

  const userPerPage = 12;

  const pageVisited = pageNumber * userPerPage;

  const pageCount = Math.ceil(data.length / userPerPage);

  const displayUsers = data
    .slice(pageVisited, pageVisited + userPerPage)
    .map((value: Pet, index: number) => {
      return (
        <div key={index}>
          <PaginationSubWrapper key={index}>
            <PetImage src={value.photoUrls} alt="" />
            <Name>Hi! My name is:</Name>
            <PetName>{value.name}</PetName>
            <BuyPetButton onClick={() => dispatch(addPet(value))}>
              Buy Pet
            </BuyPetButton>
          </PaginationSubWrapper>
        </div>
      );
    });

  const changePage = ({ selected }: any) => {
    setPageNumber(selected);
  };

  const knowAvailability = (e: any) => {
    let status = e.target.value;
    axios
      .get(`https://petstore.swagger.io/v2/pet/findByStatus?status=${status}`)
      .then((response) => {
        setData(response.data);
      });
  };

  return (
    <>
      <Navbar />
      <StoreMainWrapper>
        <StoreSubWrapper>
          <LeftStoreWrapper>
            <StoreLogo src={dog} />
          </LeftStoreWrapper>
          <RightStoreWrapper>
            Search for the availability
            <AvailabilitySelectBox onChange={knowAvailability}>
              <option>Select</option>
              <option>available</option>
              <option>pending</option>
              <option>sold</option>
            </AvailabilitySelectBox>
          </RightStoreWrapper>
        </StoreSubWrapper>
      </StoreMainWrapper>
      <PaginationMainWrapper>
        {loading ? <Loader /> : null}
        {displayUsers}
      </PaginationMainWrapper>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationButtons"}
        previousLinkClassName={"previousButtons"}
        nextLinkClassName={"nextButtons"}
        activeClassName={"activeButtons"}
      />
      <Footer />
    </>
  );
};

export default Store;
