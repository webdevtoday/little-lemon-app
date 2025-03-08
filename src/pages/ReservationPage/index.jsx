import cn from "classnames";
import css from "./index.module.css";
import { ReservationForm } from "../../components/ReservationForm";
import { useReservationContext } from "../../context/reservationContext";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";

dayjs.extend(advancedFormat);

export const ReservationPage = () => {
  const { step, date, time, hours, guests } = useReservationContext();
  return (
    <>
      <div className="section">
        <div
          className={cn({
            "section-body": true,
            [css.imageWrapper]: step === 1,
          })}
        >
          {step === 1 && (
            <img
              className={css.image}
              src={require("../../assets/reservation/reservation.jpg")}
              alt="bg"
            />
          )}
        </div>
      </div>
      <div className="section">
        <div className="section-body">
          <div className={css.body}>
            {step === 1 && (
              <>
                <h1 className="title">Reserve a table!</h1>
                <p>
                  Experience unforgettable moments at Little Lemon—where every
                  dinner with family and friends becomes special!
                </p>
              </>
            )}
            {step === 2 && (
              <>
                <h1 className="title">Your reservation:</h1>
                <dl className={css.reservation}>
                  <dt>Date:</dt>
                  <dd>
                    {dayjs(`${date} ${time}`).format("dddd, Do MMMM, YYYY")}
                  </dd>

                  <dt>Time:</dt>
                  <dd>{dayjs(`${date} ${time}`).format("HH:mm A")}</dd>

                  <dt>Duration:</dt>
                  <dd>Approx. {hours} hours</dd>

                  <dt>Guests:</dt>
                  <dd>{guests}</dd>
                </dl>
              </>
            )}
            {step === 2 && <h1 className="title">Personal info:</h1>}
            <ReservationForm />
          </div>
        </div>
      </div>
    </>
  );
};
