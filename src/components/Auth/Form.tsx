import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
// import ErrorSvg from "../../assets/svg/authForm/error.svg";
// import SuccessSvg from "../../assets/svg/authForm/success.svg";
// import UserSvg from "../../assets/svg/authForm/name.svg";

// Определение интерфейса для значений формы
interface FormValues {
  name?: string;
  email: string;
  password: string;
}

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .typeError("Must be string")
    .required("Please enter your name")
    .matches(/^[a-zA-Z0-9а-яА-ЯІіЇї]+$/, "Special symbols are not allowed")
    .min(1, "Your username is too short")
    .max(16, "Username cannot be longer than 16 characters"),
  email: Yup.string()
    .email("Invalid email")
    .typeError("Must be string")
    .trim()
    .required("Please enter your email")
    .min(7, "Your email is too short")
    .max(35, "Email cannot be longer than 35 characters")
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      // /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email format"
    ),
  password: Yup.string()
    .typeError("Must be string")
    .trim()
    .required("Please enter your password")
    .min(6, "Your password is too short")
    .max(16, "Password cannot be longer than 16 characters")
    .test(
      "password",
      "Password is little secure.Please enter an uppercase letter, a lowercase letter, and a number",
      (value) =>
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,16}$/.test(value || "")
    ),
});

interface FormProps {
  page: "signin" | "register";
}

// interface SvgProps {
//   fill: string;
//   // Add other props specific to your SVG components here
// }

const MyForm: React.FC<FormProps> = ({ page }) => {
  // Начальные значения формы
  const initialValues: FormValues = {
    name: "",
    email: "",
    password: "",
  };

  // Функция для обработки отправки формы
  const handleSubmit = (values: FormValues) => {
    console.log(values);
    // Здесь вы можете выполнить дополнительные действия, такие как отправка данных на сервер
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={SignupSchema}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        isValid,
        // handleSubmit,
        dirty,
      }) => (
        <Form>
          {page === "register" && (
            <>
              <label htmlFor="name">
                <div>
                  {/* <UserSvg
                  //  fill="#fafafa"
                  // className={`${
                  //   errors.name && touched.name ? styles.error_fill : ""
                  // } ${
                  //   !errors.name && touched.name ? styles.success_fill : ""
                  // }`}
                  /> */}
                </div>
                <Field
                  autoComplete="off"
                  type="text"
                  name="name"
                  placeholder="Name"
                  // className={`${styles.input} ${
                  //   errors.name && touched.name ? styles.error : ""
                  // } ${!errors.name && touched.name ? styles.success : ""}`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />

                {touched.name && errors.name && (
                  <>
                    <p>{errors.name}</p>
                    {/* <ErrorSvg className={styles.error_svg} /> */}
                  </>
                )}
                {/* {touched.name && !errors.name && (
                  // <SuccessSvg className={styles.success_svg} />
                )} */}
              </label>
            </>
          )}
          {/* Остальной JSX код формы... */}
          <button
            // className={styles.submit_button}
            disabled={!isValid && !dirty}
            // onClick={handleSubmit}
            type="submit"
          >
            {page === "signin" ? "Sign in" : "Sign up"}
          </button>
          {/* Остальной JSX код формы... */}
        </Form>
      )}
    </Formik>
  );
};

export default MyForm;
