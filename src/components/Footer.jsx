import { Link } from "react-router";
import { siteMenu } from "../routes";

export const Footer = () => (
  <footer>
    <img src="__LOGO__" alt="__LOGO__" />

    <nav>
      <li>Doormat Navigation</li>
      {siteMenu.map(({ name, path }) => (
        <li key={path} className="MenuItem">
          <Link className="MenuLink" to={path}>
            {name}
          </Link>
        </li>
      ))}
    </nav>

    <nav>
      <li>Contact</li>
      {["Address", "Phone number", "Email"].map((item) => (
        <li key={item}>
          <a href={`/${item.toLowerCase().split(" ").join("-")}`}>{item}</a>
        </li>
      ))}
    </nav>

    <nav>
      <li>Social Media Links</li>
      {["Address", "Phone number", "Email"].map((item) => (
        <li key={item}>
          <a href={`/${item.toLowerCase().split(" ").join("-")}`}>{item}</a>
        </li>
      ))}
    </nav>
  </footer>
);
