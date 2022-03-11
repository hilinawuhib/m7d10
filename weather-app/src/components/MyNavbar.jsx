import React from "react";
import { Navbar } from "react-bootstrap";
const MyNavbar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/weatherlogo.png"
            width="50"
            height="50"
            className="d-inline-block align-top"
          />{" "}
          weather app
        </Navbar.Brand>
      </Navbar>
    </>
  );
};
export default MyNavbar;
