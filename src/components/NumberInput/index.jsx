import cn from "classnames";
import css from "./input.module.css";

const ArrowLeftIcon = ({ ...props }) => (
  <svg
    width="12.754272"
    height="23.674927"
    viewBox="0 0 12.7543 23.6749"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs />
    <path
      id="Vector"
      d="M11.75 1L1 11.83L11.75 22.67"
      stroke="currentColor"
      strokeOpacity="1.000000"
      strokeWidth="2.000000"
      strokeLinejoin="round"
      strokeLinecap="round"
    />
  </svg>
);

const ArrowRightIcon = ({ ...props }) => (
  <svg
    width="12.754150"
    height="23.674927"
    viewBox="0 0 12.7542 23.6749"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs />
    <path
      id="Vector"
      d="M1 22.67L11.75 11.83L6.37 6.42L1 1"
      stroke="currentColor"
      strokeOpacity="1.000000"
      strokeWidth="2.000000"
      strokeLinejoin="round"
      strokeLinecap="round"
    />
  </svg>
);

export const NumberInput = ({
  className,
  id,
  name,
  min,
  max,
  value,
  onBlur,
  onChange,
  ...props
}) => {
  const minus = () => {
    const n = parseInt(value) || 0;
    if (typeof min === "number" && n > min) {
      onChange(n - 1);
    }
  };

  const plus = () => {
    const n = parseInt(value) || 0;
    if (typeof max === "number" && n < max) {
      onChange(n + 1);
    }
  };

  return (
    <div className={cn(css.body, className)} {...props}>
      <button onClick={minus} type="button" className={css.left}>
        {<ArrowLeftIcon className={css.icon} />}
      </button>
      <input
        id={id ?? null}
        name={name ?? null}
        type="text"
        inputMode="number"
        className={css.input}
        value={value}
        onBlur={onBlur}
        onChange={(e) => onChange(parseInt(e.target.value) || 0)}
      />
      <button onClick={plus} type="button" className={css.right}>
        {<ArrowRightIcon className={css.icon} />}
      </button>
    </div>
  );
};
