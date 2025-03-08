import { render, screen, act } from "@testing-library/react";

import { MemoryRouter } from "react-router";
import { ReservationProvider } from "../../context/reservationContext";
import { ReservationPage } from ".";

test("renders Reserve a table! text", async () => {
  // eslint-disable-next-line
  await act(() => {
    render(
      <ReservationProvider>
        <MemoryRouter>
          <ReservationPage />
        </MemoryRouter>
      </ReservationProvider>
    );
  });

  const headingElement = screen.getByText("Reserve a table!");
  expect(headingElement).toBeInTheDocument();
});
