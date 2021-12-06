import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container, Main } from "./styles";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { useDispatch } from "react-redux";
import { autoLogin } from "../../store/actions";

const Layout = ({ children }) => {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const authDataJSON = localStorage.getItem('authData');
    if (authDataJSON) {
      const authData = JSON.parse(authDataJSON);
      const { token, id, expiryDate } = authData;
      dispatch(autoLogin(token, id, expiryDate));
    }
  });

  if (
    location.pathname === "/auth" ||
    location.pathname === "/guest" ||
    location.pathname === "/logout"
  ) {
    return (
      <Container>
        <Main>{children}</Main>
      </Container>
    );
  }

  return (
    <Container>
      <Navbar />
      <Main>{children}</Main>
      <Footer />
    </Container>
  );
};

export default Layout;
