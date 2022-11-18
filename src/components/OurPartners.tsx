import kiaLogo from "../assets/images/kiaLogo.webp";
import kongLogo from "../assets/images/kongLogo.webp";
import {
  ClientHeading,
  ClientsImage,
  ClientsWrapper,
  Divider,
  PartnerMainWrapper,
  PartnerSubWrapper,
} from "styles/components/ourPartners";

const OurPartners = () => {
  return (
    <PartnerMainWrapper>
      <Divider />
      <PartnerSubWrapper>
        <ClientHeading>Our Partners</ClientHeading>
        <ClientsWrapper>
          <ClientsImage src={kiaLogo} />
          <ClientsImage src={kongLogo} />
        </ClientsWrapper>
      </PartnerSubWrapper>
    </PartnerMainWrapper>
  );
};

export default OurPartners;
