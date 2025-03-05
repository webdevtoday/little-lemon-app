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
        <Link className={css.button} to={reservationPageRoute()}>
          Reserve a Table
        </Link>
        {/* <button className={css.button}>Reserve a Table</button> */}
      </div>
      <div className={css.imageHolder}>
        <img
          className={css.image}
          src={require("../../assets/3d3cce7a3104bf255ed0e69195e2a157338c1bff.jpg")}
          alt="Little Lemon Chicago"
        />
      </div>
    </div>
  </section>
);
