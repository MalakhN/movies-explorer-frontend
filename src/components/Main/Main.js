import React from "react";
import Header from "../Header/Header";
import HeaderEntr from "../Header/HeaderEntr/HeaderEntr"
import Promo from "../Main/Promo/Promo";
import AboutProject from "../Main/AboutProject/AboutProject";
import Techs from "../Main/Techs/Techs"
import AboutMe from "../Main/AboutMe/AboutMe"
import Portfolio from "../Main/Portfolio/Portfolio"
import Footer from "../Footer/Footer";

function Main() {
  return (
    <>
      <Header containerClassName="header__container-main">
        <HeaderEntr/>
      </Header>
      <Promo/>
      <AboutProject/>
      <Techs/>
      <AboutMe/>
      <Portfolio/>
      <Footer/>
    </>
  );
}

export default Main;