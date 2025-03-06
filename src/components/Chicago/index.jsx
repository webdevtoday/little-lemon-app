import css from "./index.module.css";

export const Chicago = () => (
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
        <p>
          At Little Lemon, our passion is to embrace the timeless flavors of the
          Mediterranean, infusing them with a modern twist. We're a family-owned
          establishment dedicated to bringing you the heartwarming traditions of
          our heritage, one delectable dish at a time.
        </p>
      </div>
      <div className={css.imageHolder}>
        <img
          className={css.image}
          src={require("../../assets/chicago/chicago-1.jpg")}
          alt="Little Lemon Chicago"
        />
        <img
          className={css.image}
          src={require("../../assets/chicago/chicago-2.jpg")}
          alt="Little Lemon Chicago"
        />
      </div>
    </div>
  </section>
);
