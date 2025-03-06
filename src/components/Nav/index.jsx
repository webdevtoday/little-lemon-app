import cn from "classnames";
import { Link, NavLink } from "react-router";
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
          <NavLink
            className={({ isActive }) =>
              cn({ [css.navLink]: true, [css.active]: isActive })
            }
            to={path}
          >
            {name}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);
