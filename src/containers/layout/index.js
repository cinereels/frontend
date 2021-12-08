import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Container, Main } from "./styles";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { useDispatch, useSelector } from "react-redux";
import { autoLogin } from "../../store/actions";
import SplashPage from "../../pages/splash";

const Layout = ({ children }) => {
  const location = useLocation();
  const dispatch = useDispatch();

  const token = useSelector(state => state.ath.token);
  const id = useSelector(state => state.ath.id);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const authDataJSON = localStorage.getItem('authData');
    if (authDataJSON) {
      const authData = JSON.parse(authDataJSON);
      const { token, id, expiryDate, isAdmin } = authData;
      dispatch(autoLogin(token, id, expiryDate, isAdmin));
    } else {
      setIsLoading(false);
    }
  }, [dispatch]);

  useEffect(() => {
    if (token) {
      // fetching current user
      setIsLoading(false);
    }
  }, [token, id]);

  if (isLoading) {
    return (
      <Container>
        <Main>
          <SplashPage />
        </Main>
      </Container>
    );
  }

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
