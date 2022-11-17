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
  AddIconWrapper,
} from "styles/pages/store";
import "../../App.css";
import Navbar from "../../components/Navbar";
import dog from "../../assets/images/dog.png";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Footer from "components/Footer";
import Loader from "components/Loader";
import { addPet } from "../../redux/petAction";
import { useDispatch } from "react-redux";
import api from "services/instance";
import { Link } from "react-router-dom";
import { BiMessageSquareAdd } from "react-icons/bi";
import AddPetModal from "pages/addPet";

const Store = () => {
  interface Pet {
    id?: number;
    name: string;
    breed: string;
    photoUrls: string;
  }

  const [data, setData] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/pet/findByStatus?status=available").then((response) => {
      setData(response.data);
      setLoading(false);
    });
  }, []);

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
            <Link to={`/single-pet/${value.id}`}>
              <PetImage src={value.photoUrls} alt="" />ß{" "}
            </Link>
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
    api.get(`/pet/findByStatus?status=${status}`).then((response) => {
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
            Add pet
            <AddIconWrapper>
              <BiMessageSquareAdd
                onClick={() => setIsModalOpen(!isModalOpen)}
              />
            </AddIconWrapper>
            Search for the availability
            <AvailabilitySelectBox onChange={knowAvailability}>
              <option>Select</option>
              <option>available</option>
              <option>pending</option>
              <option>sold</option>
            </AvailabilitySelectBox>
          </RightStoreWrapper>
        </StoreSubWrapper>
        {isModalOpen && <AddPetModal status={setIsModalOpen} />}
      </StoreMainWrapper>
      <PaginationMainWrapper>
        {loading ? <Loader /> : displayUsers}
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
