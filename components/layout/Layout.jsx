import React from "react";
import { Box } from "@mui/material";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
