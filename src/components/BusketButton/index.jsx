import { IconButton } from "../IconButton";
import svg from "../../assets/busket.svg";

export const BusketButton = () => (
  <IconButton style={{ transform: "translateX(8px)" }}>
    <img src={svg} alt="busket icon" />
  </IconButton>
);
