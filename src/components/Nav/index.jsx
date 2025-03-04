import cn from "classnames";
import { Link } from "react-router";
import { siteMenu } from "../../routes";
import css from "./index.module.css";

export const Nav = ({ isMobile, isOpen, onClose }) => (
  <nav
    className={cn({
      [css.nav]: true,
      [css.mobile]: isMobile,
      [css.open]: isOpen,
    })}
    onClick={onClose}
  >
    <ul className={css.navBody}>
      {siteMenu.map(({ name, path }) => (
        <li key={path}>
          <Link className={css.navLink} to={path}>
            {name}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);
