import {
  PetBreed,
  PetImage,
  PetMainWrapper,
  PetName,
  PetSubWrapper,
} from "styles/components/pets";

const Pets = () => {
  interface Pet {
    id?: number;
    name: string;
    breed: string;
    image?: string;
  }

  const PetData = [
    {
      id: 1,
      name: "MILLIE",
      breed: "Sheltie, Shetland Sheepdog",
      image: "https://pet-uploads.adoptapet.com/6/d/6/634569647.jpg",
    },
    {
      id: 2,
      name: "SILVEE",
      breed: "Pit Bull Terrier",
      image: "https://pet-uploads.adoptapet.com/b/c/5/639538379.jpg",
    },
    {
      id: 3,
      name: "BRUNO",
      breed: "Chihuahua",
      image: "https://pet-uploads.adoptapet.com/6/d/1/641241874.jpg",
    },
    {
      id: 4,
      name: "REX",
      breed: "Labrador Retriever",
      image: "https://pet-uploads.adoptapet.com/4/6/a/660350098.jpg",
    },
    {
      id: 5,
      name: "BO-PEPP",
      breed: "Shepherd",
      image: "https://pet-uploads.adoptapet.com/1/0/3/655103419.jpg",
    },
    {
      id: 6,
      name: "MOOSE",
      breed: "Australian Cattle Dog",
      image: "https://pet-uploads.adoptapet.com/a/c/8/666315448.jpeg",
    },
    {
      id: 7,
      name: "PUMPKIN",
      breed: "American Pit Bull Terrier",
      image: "https://pet-uploads.adoptapet.com/e/6/0/665987521.jpeg",
    },
    {
      id: 8,
      name: "HALLIE",
      breed: "Terrier ",
      image: "https://pet-uploads.adoptapet.com/7/d/0/668066316.jpeg",
    },
    {
      id: 9,
      name: "CANDY",
      breed: "Jack Russell Terrier",
      image: "https://pet-uploads.adoptapet.com/a/d/b/666804378.jpeg",
    },
  ];

  return (
    <PetMainWrapper>
      {PetData.map((value: Pet) => {
        return (
          <PetSubWrapper>
            <PetImage src={value.image} alt="" />
            <PetName>{value.name}</PetName>
            <PetBreed>{value.breed}</PetBreed>
          </PetSubWrapper>
        );
      })}
    </PetMainWrapper>
  );
};

export default Pets;
