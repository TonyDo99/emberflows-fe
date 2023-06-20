import * as Yup from "yup";

export const BookingSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(15, "Too Long!")
    .required("Name cannot be empty !"),
  email: Yup.string()
    .email("Invalid email")
    .required("Email cannot be empty !"),
  phoneNumber: Yup.string().required("Phone Number cannot be empty !"),
});
