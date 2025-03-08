import { createContext, useContext, useState } from "react";

const ReservationContext = createContext(undefined);

const initialData = {
  step: 1,
  date: null,
  time: null,
  hours: 1,
  guests: 1,
};
const testData = {
  step: 2,
  date: "2025-03-13",
  time: "10:30",
  hours: 1,
  guests: 1,
};

export const ReservationProvider = ({ children }) => {
  const [state, setState] = useState(initialData);

  return (
    <ReservationContext.Provider
      value={{
        ...state,
        onNext: (props) => setState({ ...props }),
        onReset: () => setState(initialData),
      }}
    >
      {children}
    </ReservationContext.Provider>
  );
};

export const useReservationContext = () => useContext(ReservationContext);
