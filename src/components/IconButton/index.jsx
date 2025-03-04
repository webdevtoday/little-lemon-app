import cn from "classnames";
import css from "./index.module.css";

export const IconButton = ({ className, style, children, ...props }) => (
  <button className={cn(css.button, className)} style={{ ...style }} {...props}>
    <div className={css.body}>{children}</div>
  </button>
);
