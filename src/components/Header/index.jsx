import { useEffect, useState } from "react";
import { Nav } from "../Nav";
import css from "./index.module.css";
import { Link } from "react-router";
import { homePageRoute } from "../../routes";

const debounce = (callback, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback(...args), delay);
  };
};

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    const debouncedHandleResize = debounce(handleResize, 300);

    window.addEventListener("resize", debouncedHandleResize);

    return () => window.removeEventListener("resize", debouncedHandleResize);
  }, []);

  return windowSize;
};

const isMobile = (width) => width <= 890;

export const Header = () => {
  const { width } = useWindowSize();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="section-body">
        <div className={css.headerBody}>
          {isMobile(width) && (
            <span onClick={() => setMenuOpen(!menuOpen)}>Menu Toggler</span>
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
        </div>
      </div>
    </header>
  );
};
