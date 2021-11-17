import React from "react";
import { Container } from "./styles";
import ShowList from "../../components/show-list";
import Theme from "../../components/theme";
import { matches } from "./match";

const Home = () => {
  const bg =
    "https://e0.365dm.com/21/05/2048x1152/skysports-manchester-united_5377138.jpg";
  const description = `The Liverpool F.C.–Manchester United F.C. rivalry is a high-profile inter-city rivalry between English professional football clubs Liverpool and Manchester United. It is considered the biggest fixture in English football and one of the biggest rivalries in world football. Players, fans and the media consider the fixture between the two clubs to be their biggest rivalry, above even their own local derbies, with Everton and Manchester City respectively.`;

  return (
    <>
      <Container>
        <Theme
          bg={bg}
          title={"Manchester United vs Liverpool"}
          description={description}
        />
        <ShowList list={matches} legend={"Cricket"} />
        <ShowList list={matches} legend={"Football"} />
      </Container>
    </>
  );
};

export default Home;
