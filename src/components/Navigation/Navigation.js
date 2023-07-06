import React from "react";
import "./Navigation.css"
import HeaderNav from "../Header/HeaderNav/HeaderNav"
import HeaderAcc from "../Header/HeaderAcc/HeaderAcc"
import NavDrawer from "../Navigation/NavDrawer/NavDrawer";

function Navigation() {
  const [isBurgerClick, setIsBurgerClick] = React.useState(false);

  const openMenu = () => {
    setIsBurgerClick(true);
  };

  const onCloseDrawer = () => {
    setIsBurgerClick(false);
  };

  return (
    <>
      <div className="navigation">
        <div className="navigation__container">
          <HeaderNav/>
          <HeaderAcc/>
        </div>
        {isBurgerClick ? (
          <NavDrawer onCloseDrawer={onCloseDrawer} />
        ) : (
          <button className="navigation__burger" onClick={openMenu}></button>
        )}
      </div>
    </>
  );
}

export default Navigation;