import { Link } from "react-router";
import { menuPageRoute } from "../../routes";
import css from "./index.module.css";
import { MenuCard } from "../MenuCard";

const CARDS = [
  {
    title: "Greek salad",
    short:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    price: "$12.99",
    image: require("../../assets/images/9beeddcd9d22dc711cd9fddc4a3393a7278299c7.jpg"),
  },
  {
    title: "Bruchetta",
    short:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    price: "$5.99",
    image: require("../../assets/images/957db75e6b654e07f65da12b96dc858c5995ed28.jpg"),
  },
  {
    title: "Lemon Dessert",
    short:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    price: "$5.00",
    image: require("../../assets/images/lemon-dessert.jpg"),
  },
];

export const Specials = () => (
  <div className={css.body}>
    <div className={css.heading}>
      <h2 className="title">This weeks specials!</h2>
      <Link to={menuPageRoute()} className="button button--large">
        Online Menu
      </Link>
    </div>
    <div className={css.cards}>
      {CARDS.map((card) => (
        <MenuCard key={card.title} {...card} />
      ))}
    </div>
  </div>
);
