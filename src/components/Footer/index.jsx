import { Link } from "react-router";
import { siteMenu } from "../../routes";
import css from "./index.module.css";

export const Footer = () => (
  <footer className={css.footer}>
    <img
      style={{ filter: "invert(100%) brightness(150%)", maxWidth: 162 }}
      src={require("../../assets/asset18@4x.png")}
      alt="Little Lemon Restaurant Logo"
    />

    <nav>
      <ul>
        <li>Sitemap</li>
        {siteMenu.map(({ name, path }) => (
          <li key={path} className="MenuItem">
            <Link className="MenuLink" to={path}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>

    <nav>
      <ul>
        <li>Contact Us</li>
        <li>
          <span>123 Pisa Ave, Chicago, IL 60611s</span>
        </li>
        <li>
          <a href="tel: (123) 456-7890">(123) 456-7890</a>
        </li>
        <li>
          <a href="mailto: customer@littlelemon.com">
            customer@littlelemon.com
          </a>
        </li>
      </ul>
    </nav>

    <nav>
      <ul>
        <li>Social</li>
        {["Meta", "Instagram", "X"].map((item) => (
          <li key={item}>
            <button href="#">{item}</button>
          </li>
        ))}
      </ul>
    </nav>
  </footer>
);
