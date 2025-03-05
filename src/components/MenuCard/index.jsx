import css from "./index.module.css";
import icon from "../../assets/delivering.svg";

export const MenuCard = ({ image, title, price, short }) => (
  <div className={css.card}>
    <img className={css.image} src={image} alt={title} />
    <div className={css.body}>
      <div>
        <div className={css.heading}>
          <h3 className={css.title}>{title}</h3>
          <span className={css.price}>{price}</span>
        </div>
        <p>{short}</p>
      </div>
      <button className={css.button}>
        Order a delivery <img className={css.icon} src={icon} alt="icon" />
      </button>
    </div>
  </div>
);
