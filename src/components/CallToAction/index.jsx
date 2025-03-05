import { Link } from "react-router";
import { reservationPageRoute } from "../../routes";
import css from "./index.module.css";

export const CallToAction = () => (
  <section className={css.section}>
    <div className={css.body}>
      <div className={css.heading}>
        <h1 className={css.title}>Little Lemon</h1>
        <span className={css.subtitle}>Chicago</span>
      </div>
      <div className={css.description}>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <Link className="button" to={reservationPageRoute()}>
          Reserve a Table
        </Link>
      </div>
      <div className={css.imageHolder}>
        <img
          className={css.image}
          src={require("../../assets/images/f64e8d485894f9df206830063adbc400d85de711.jpg")}
          alt="Little Lemon Chicago"
        />
      </div>
    </div>
  </section>
);
