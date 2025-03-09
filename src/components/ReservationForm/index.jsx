import { useNavigate } from "react-router";

import cn from "classnames";

import * as Yup from "yup";
import { useFormik } from "formik";

import {
  defaultCountries,
  FlagImage,
  usePhoneInput,
} from "react-international-phone";
import "react-international-phone/style.css";
import { PhoneNumberUtil } from "google-libphonenumber";
import { reservationThankYouPageRoute } from "../../routes";
import { useReservationContext } from "../../context/reservationContext";
import { NumberInput } from "../NumberInput";
import css from "./index.module.css";
import { submitAPI } from "../../utils";

const MIN_DATE = new Date();
MIN_DATE.setHours(0, 0, 0, 0);
const MAX_DATE = new Date();
MAX_DATE.setMonth(MAX_DATE.getMonth() + 6);
MAX_DATE.setHours(0, 0, 0, 0);
const MIN_DATE_FORMATTED = MIN_DATE.toLocaleDateString("en-CA");
const MAX_DATE_FORMATTED = MAX_DATE.toLocaleDateString("en-CA");
const MIN_DURATION = 1;
const MAX_DURATION = 4;
const MIN_GUESTS = 1;
const MAX_GUESTS = 6;

const phoneUtil = PhoneNumberUtil.getInstance();

const isPhoneValid = (phone) => {
  try {
    return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
  } catch (error) {
    return false;
  }
};

const step1Validation = Yup.object({
  date: Yup.date()
    .min(
      MIN_DATE,
      `Date cannot be earlier than ${MIN_DATE.toLocaleDateString()}`
    )
    .max(MAX_DATE, `Date cannot be later than ${MAX_DATE.toLocaleDateString()}`)
    .required(`Date is required`),
  time: Yup.string().required("Time is required"),
  hours: Yup.number()
    .required("Duration is required")
    .positive("Duration must be a positive number")
    .integer("Duration must be a whole number")
    .min(MIN_DURATION, `Duration must be at least ${MIN_DURATION} hour`)
    .max(MAX_DURATION, `Duration cannot exceed ${MAX_DURATION} hours`),
  guests: Yup.number()
    .required("Number of guests is required")
    .positive("Number of guests must be a positive number")
    .integer("Number of guests must be a whole number")
    .min(MIN_GUESTS, `At least ${MIN_GUESTS} guest is required`)
    .max(MAX_GUESTS, `No more than ${MAX_GUESTS} guests allowed`),
});

const step2Validation = Yup.object({
  name: Yup.string().required("Name is required"),
  lastname: Yup.string().required("Last name is required"),
  phone: Yup.string()
    .test("is-valid-phone", `Phone is not valid`, (value) =>
      isPhoneValid(value)
    )
    .required(`Phone is required`),
  comment: Yup.string(),
});

export const ReservationForm = () => {
  const { state, dispatch } = useReservationContext();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      date: "",
      time: "",
      hours: 1,
      guests: 2,
      name: "",
      lastname: "",
      phone: "",
      comment: "",
    },
    onSubmit: (values) => {
      if (submitAPI(values)) {
        formik.resetForm();
        dispatch({ type: "RESET" });
        navigate(reservationThankYouPageRoute());
      }
    },
    validationSchema: state.step === 1 ? step1Validation : step2Validation,
  });

  const { inputValue, handlePhoneValueChange, inputRef, country } =
    usePhoneInput({
      defaultCountry: "us",
      value: formik.values.phone,
      countries: defaultCountries,
      onChange: (data) => formik.setFieldValue("phone", data.phone),
    });

  const handleNextStep = async () => {
    if (state.step !== 1) return;

    const errors = await formik.validateForm();

    formik.setTouched({
      date: true,
      time: true,
      hours: true,
      guests: true,
    });

    if (Object.keys(errors).length === 0) {
      dispatch({ type: "SET_TIME", payload: formik.values.time });
      dispatch({ type: "SET_HOURS", payload: formik.values.hours });
      dispatch({ type: "SET_GUESTS", payload: formik.values.guests });
      dispatch({ type: "NEXT_STEP" });
    }
  };

  return (
    <form className={css.form} onSubmit={formik.handleSubmit}>
      <div className={css.progress}>
        <div
          className={css.progressBar}
          style={{ width: `${(state.step / 2) * 100}%` }}
        ></div>
      </div>

      {state.step === 1 && (
        <div className={cn(css.body, css.twoColumns)}>
          <div className={css.inputWrapper}>
            <label htmlFor="date" className={css.required}>
              Date
            </label>
            <input
              id="date"
              name="date"
              type="date"
              min={MIN_DATE_FORMATTED}
              max={MAX_DATE_FORMATTED}
              value={formik.values.date}
              onChange={(event) => {
                formik.setFieldValue("date", event.target.value);
                dispatch({ type: "SET_DATE", payload: event.target.value });
              }}
              onBlur={formik.handleBlur}
              className={cn({
                [css.withColor]: true,
                [css.invalid]: formik.touched.date && formik.errors.date,
                [css.valid]: formik.touched.date && !formik.errors.date,
              })}
            />
            {formik.touched.date && formik.errors.date && (
              <div className={css.error}>{formik.errors.date}</div>
            )}
          </div>
          <div className={css.inputWrapper}>
            <label htmlFor="time" className={css.required}>
              Time
            </label>
            <select
              id="time"
              name="time"
              disabled={state.availableTimes.length <= 0}
              {...formik.getFieldProps("time")}
              className={cn({
                [css.withColor]: true,
                [css.invalid]: formik.touched.time && formik.errors.time,
                [css.valid]: formik.touched.time && !formik.errors.time,
              })}
            >
              <option value="">Select Time</option>
              {state.availableTimes.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
            {formik.touched.time && formik.errors.time && (
              <div className={css.error}>{formik.errors.time}</div>
            )}
          </div>
          <div className={css.inputWrapper}>
            <label htmlFor="hours" className={css.required}>
              Length of stay
            </label>
            <NumberInput
              name="hours"
              min={MIN_DURATION}
              max={MAX_DURATION}
              value={formik.values.hours}
              onChange={(value) => formik.setFieldValue("hours", value)}
              onBlur={formik.handleBlur}
              className={cn({
                [css.withColor]: true,
                [css.invalid]: formik.touched.hours && formik.errors.hours,
                [css.valid]: formik.touched.hours && !formik.errors.hours,
              })}
            />
            {formik.touched.hours && formik.errors.hours && (
              <div className={css.error}>{formik.errors.hours}</div>
            )}
          </div>
          <div className={css.inputWrapper}>
            <label htmlFor="guests" className={css.required}>
              Guests
            </label>
            <NumberInput
              name="guests"
              min={MIN_GUESTS}
              max={MAX_GUESTS}
              value={formik.values.guests}
              onChange={(value) => formik.setFieldValue("guests", value)}
              onBlur={formik.handleBlur}
              className={cn({
                [css.withColor]: true,
                [css.invalid]: formik.touched.guests && formik.errors.guests,
                [css.valid]: formik.touched.guests && !formik.errors.guests,
              })}
            />
            {formik.touched.guests && formik.errors.guests && (
              <div className={css.error}>{formik.errors.guests}</div>
            )}
          </div>
        </div>
      )}
      {state.step === 2 && (
        <div className={cn(css.body, css.oneColumn)}>
          <div className={css.inputWrapper}>
            <label htmlFor="name" className={css.required}>
              First Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="John"
              {...formik.getFieldProps("name")}
              className={cn({
                [css.invalid]: formik.touched.name && formik.errors.name,
                [css.valid]: formik.touched.name && !formik.errors.name,
              })}
            />
            {formik.touched.name && formik.errors.name && (
              <div className={css.error}>{formik.errors.name}</div>
            )}
          </div>
          <div className={css.inputWrapper}>
            <label htmlFor="lastname" className={css.required}>
              Last Name
            </label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Doe"
              {...formik.getFieldProps("lastname")}
              className={cn({
                [css.invalid]:
                  formik.touched.lastname && formik.errors.lastname,
                [css.valid]: formik.touched.lastname && !formik.errors.lastname,
              })}
            />
            {formik.touched.lastname && formik.errors.lastname && (
              <div className={css.error}>{formik.errors.lastname}</div>
            )}
          </div>
          <div className={css.inputWrapper}>
            <label htmlFor="phone" className={css.required}>
              Phone
            </label>
            <div className={css.phoneInputWrapper}>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={inputValue}
                onChange={handlePhoneValueChange}
                ref={inputRef}
                onBlur={formik.handleBlur}
                className={cn({
                  [css.invalid]: formik.touched.phone && formik.errors.phone,
                  [css.valid]: formik.touched.phone && !formik.errors.phone,
                })}
              />
              <FlagImage iso2={country.iso2} className={css.flagImage} />
            </div>
            {formik.touched.phone && formik.errors.phone && (
              <div className={css.error}>{formik.errors.phone}</div>
            )}
          </div>
          <div className={css.inputWrapper}>
            <label htmlFor="comment">Comment</label>
            <textarea
              id="comment"
              name="comment"
              rows={3}
              placeholder="Text..."
              {...formik.getFieldProps("comment")}
              className={cn({
                [css.invalid]: formik.touched.comment && formik.errors.comment,
                [css.valid]: formik.touched.comment && !formik.errors.comment,
              })}
            />
            {formik.touched.comment && formik.errors.comment && (
              <div className={css.error}>{formik.errors.comment}</div>
            )}
          </div>
        </div>
      )}

      <small>* field is mandatory to enter</small>

      <button
        type={state.step === 1 ? "button" : "submit"}
        onClick={handleNextStep}
        className="button"
      >
        {state.step === 1 ? "Checkout" : "Reserve"}
      </button>
    </form>
  );
};
