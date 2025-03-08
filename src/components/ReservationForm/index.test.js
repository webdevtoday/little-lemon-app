import {
  render,
  screen,
  act,
  fireEvent,
  waitFor,
} from "@testing-library/react";

import { BrowserRouter } from "react-router";
import dayjs from "dayjs";
import { ReservationProvider } from "../../context/reservationContext";
import { ReservationForm } from ".";
import { reservationThankYouPageRoute } from "../../routes";

test("should submit the form successfully", async () => {
  // eslint-disable-next-line
  await act(() => {
    render(
      <ReservationProvider>
        <BrowserRouter>
          <ReservationForm />
        </BrowserRouter>
      </ReservationProvider>
    );
  });

  // eslint-disable-next-line
  await act(() => {
    fireEvent.change(screen.getByLabelText(/Date/i), {
      target: { value: dayjs().add(1, "day").format("YYYY-MM-DD") },
    });
    fireEvent.change(screen.getByLabelText(/Time/i), {
      target: { value: "12:00" },
    });
    fireEvent.click(screen.getByRole("button", { name: /checkout/i }));
  });

  await waitFor(() => {
    expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument();
  });

  // eslint-disable-next-line
  await act(() => {
    fireEvent.change(screen.getByLabelText(/First Name/i), {
      target: { value: "John" },
    });
    fireEvent.change(screen.getByLabelText(/Last Name/i), {
      target: { value: "Doe" },
    });
    fireEvent.change(screen.getByLabelText(/Phone/i), {
      target: { value: "+12013892834" },
    });
    fireEvent.change(screen.getByLabelText(/Comment/i), {
      target: { value: "I prefer a table near the window" },
    });

    fireEvent.click(screen.getByRole("button", { name: /reserve/i }));
  });

  await waitFor(() => {
    expect(window.location.pathname).toBe(reservationThankYouPageRoute());
  });
});
