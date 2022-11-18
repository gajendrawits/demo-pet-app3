import { useNavigate } from "react-router-dom";
import {
  CancelButton,
  LogOutButton,
  LogOutHeading,
  LogOutMainWrapper,
  LogOutSubWrapper,
} from "styles/pages/logOut";

interface myprops {
  status: (setModal: boolean) => void;
}

const LogOut = (props: myprops) => {
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <LogOutMainWrapper>
      <LogOutSubWrapper>
        <LogOutButton onClick={logOut}>LogOut</LogOutButton>
        <LogOutHeading>Log Out</LogOutHeading>
        <CancelButton
          onClick={() => {
            props.status(false);
          }}
        >
          X
        </CancelButton>
      </LogOutSubWrapper>
    </LogOutMainWrapper>
  );
};

export default LogOut;
