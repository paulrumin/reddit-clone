import { Button } from "@chakra-ui/react";
import React from "react";

type AuthButtonsProps = {

};


const AuthButtons: React.FC = () => {
  return (
      <>
      <Button
        varint="outline"
        height="28px"
        display={{ base: "none", sm: "flex" }}
        width={{ base: "70px", md: "110px"}}
        mr={2}
      >
        Log In
      </Button>
      <Button
        varint="outline"
        height="28px"
        display={{ base: "none", sm: "flex" }}
        width={{ base: "70px", md: "110px"}}
        mr={2}
      >
        Sign Up
      </Button>
      </>


  );


};

export default AuthButtons;