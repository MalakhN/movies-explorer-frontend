import "./Header.css";
import Logo from "../Logo/Logo"

function Header({ children }) {
  return (
    <header className="header">
      <Logo/>
      { children }
    </header>
  );
}

export default Header;