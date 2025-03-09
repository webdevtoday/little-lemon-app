import { createContext, useContext, useReducer } from "react";
import { fetchAPI } from "../utils";
import dayjs from "dayjs";

const ReservationContext = createContext(undefined);

const getAvailableTimes = (date) => fetchAPI(date);

const initialData = {
  step: 1,
  date: null,
  time: null,
  hours: 1,
  guests: 1,
  availableTimes: [],
};

const reservationReducer = (state, action) => {
  switch (action.type) {
    case "SET_DATE":
      const date = dayjs(action.payload).toDate();
      return {
        ...state,
        date: date,
        availableTimes: getAvailableTimes(date),
      };
    case "SET_TIME":
      return { ...state, time: action.payload };
    case "SET_HOURS":
      return { ...state, hours: action.payload };
    case "SET_GUESTS":
      return { ...state, guests: action.payload };
    case "NEXT_STEP":
      return { ...state, step: state.step + 1 };
    case "RESET":
      return initialData;
    default:
      return state;
  }
};

export const ReservationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reservationReducer, initialData);

  return (
    <ReservationContext.Provider value={{ state, dispatch }}>
      {children}
    </ReservationContext.Provider>
  );
};

export const useReservationContext = () => useContext(ReservationContext);
