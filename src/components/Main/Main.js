import React from "react";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation"
import HeaderEntr from "../Header/HeaderEntr/HeaderEntr"
import Promo from "../Main/Promo/Promo";
import AboutProject from "../Main/AboutProject/AboutProject";
import Techs from "../Main/Techs/Techs"
import AboutMe from "../Main/AboutMe/AboutMe"
import Portfolio from "../Main/Portfolio/Portfolio"
import Footer from "../Footer/Footer";

function Main({loggedIn}) {
  return (
    <>
      <Header>
      {loggedIn ? <Navigation/> : <HeaderEntr/>}
      </Header>
      <main className="main-content">
        <Promo/>
        <AboutProject/>
        <Techs/>
        <AboutMe/>
        <Portfolio/>
      </main>
      <Footer/>
    </>
  );
}

export default Main;