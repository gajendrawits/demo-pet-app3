import {
  AvailabilitySelectBox,
  LeftStoreWrapper,
  Name,
  PaginationMainWrapper,
  PaginationSubWrapper,
  PetBreed,
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

const Store = () => {
  interface Pet {
    id?: number;
    name: string;
    breed: string;
    photoUrls: string;
  }

  const url =
    "https://petstore.swagger.io/v2/pet/findByStatus?status=available";

  useEffect(() => {
    axios.get(url).then((response) => {
      setData(response.data);
    });
  }, [url]);

  const [data, setData] = useState([]);

  const newData = data.slice(0, 400);

  const [pageNumber, setPageNumber] = useState(0);

  const userPerPage = 12;

  const pageVisited = pageNumber * userPerPage;

  const pageCount = Math.ceil(newData.length / userPerPage);

  const displayUsers = newData
    .slice(pageVisited, pageVisited + userPerPage)
    .map((value: Pet, index: number) => {
      return (
        <PaginationSubWrapper key={index}>
          <PetImage src={value.photoUrls} alt="" />
          <Name>Hi! My name is:</Name>
          <PetName>{value.name}</PetName>
          <PetBreed>{value.breed}</PetBreed>
        </PaginationSubWrapper>
      );
    });

  const changePage = ({ selected }: any) => {
    setPageNumber(selected);
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
            <AvailabilitySelectBox>
              <option>Sold</option>
            </AvailabilitySelectBox>
          </RightStoreWrapper>
        </StoreSubWrapper>
      </StoreMainWrapper>
      <PaginationMainWrapper>{displayUsers} </PaginationMainWrapper>

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
    </>
  );
};

export default Store;
