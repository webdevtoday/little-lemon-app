import cn from "classnames";
import css from "./index.module.css";
import { TestimonialCard } from "../TestimonialCard";

const TESTIMONIALS = [
  {
    rating: 5,
    image: require("../../assets/reviews/54.jpg"),
    name: "Mia Gerard",
    nick: "purpleladybug371",
    review:
      "Little Lemon is a cozy spot with amazing food and a warm atmosphere – I absolutely love it!",
  },
  {
    rating: 5,
    image: require("../../assets/reviews/1.jpg"),
    name: "Philip Johansen",
    nick: "whitebear675",
    review:
      "Little Lemon offers fantastic food and a great vibe—definitely a must-visit!",
  },
  {
    rating: 5,
    image: require("../../assets/reviews/20.jpg"),
    name: "Tilde Pedersen",
    nick: "blackostrich674",
    review:
      "Little Lemon has delicious dishes and a charming atmosphere—I keep coming back!",
  },
  {
    rating: 5,
    image: require("../../assets/reviews/55.jpg"),
    name: "Bastien Bonnet",
    nick: "orangefrog485",
    review:
      "Little Lemon serves incredible food in a cozy setting—highly recommended!",
  },
];

export const CustomersSay = () => (
  <div className={css.body}>
    <h2 className={cn("title", css.title)}>What our customers say!</h2>
    <div className={css.cards}>
      {TESTIMONIALS.map((testimonial) => (
        <TestimonialCard key={testimonial.nick} {...testimonial} />
      ))}
    </div>
  </div>
);
