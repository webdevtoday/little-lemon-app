import { useState } from "react";
import { Nav } from "../Nav";
import css from "./index.module.css";
import { Link } from "react-router";
import { homePageRoute } from "../../routes";
import { useWindowSize } from "../../hooks/useWindowSize";
import { BurgerMenuButton } from "../BurgerMenuButton";
import { BusketButton } from "../BusketButton";

const isMobile = (width) => width <= 890;

export const Header = ({ ...props }) => {
  const { width } = useWindowSize();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header {...props}>
      <div className={css.headerBody}>
        {isMobile(width) && (
          <BurgerMenuButton onClick={() => setMenuOpen(!menuOpen)} />
        )}

        <Link to={homePageRoute()}>
          <img
            className={css.logo}
            src={require("../../assets/asset16@4x.png")}
            alt="Little Lemon Restaurant Logo"
          />
        </Link>

        <Nav
          isMobile={isMobile(width)}
          isOpen={menuOpen}
          onClose={() => setMenuOpen(false)}
        />

        <BusketButton />
      </div>
    </header>
  );
};
