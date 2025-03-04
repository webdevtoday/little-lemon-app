import { IconButton } from "../IconButton";
import css from "./index.module.css";

export const BurgerMenuButton = ({ onClick }) => (
  <IconButton style={{ transform: "translateX(-8px)" }} onClick={onClick}>
    <div className={css.body}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </IconButton>
);
