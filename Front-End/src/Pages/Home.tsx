import { LoginSignUp } from "../Components/LoginSignUp";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "../Components/NavBar";
import { useState } from "react";

export function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [loginType, setLoginType] = useState<string>("");

  return (
    <>
      <NavBar
        onOpenLogin={(type) => {
          setLoginType(type);      
          setIsOpen(true);         
        }}
      />
      <LoginSignUp
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        name={loginType}           
      />
    </>
  );
}