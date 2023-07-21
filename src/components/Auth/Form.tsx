import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { SignupSchema, LoginSchema } from "../../schemas/yupSchemas";

import ErrorSvg from "../../images/svg/authForm/error.svg";
import SuccessSvg from "../../images/svg/authForm/success.svg";
// import EmailSvg from "/src/images/svg/authForm/email.svg";
// import PassSvg from "/src/images/svg/authForm/password.svg";
// import UserSvg from "/src/images/svg/authForm/name.svg";
import { ReactComponent as UserSvg } from "/src/images/svg/authForm/name.svg";

// Определение интерфейса для значений формы
interface FormValues {
  name: string;
  email: string;
  password: string;
}

interface FormProps {
  page: "signin" | "register";
}

// interface SvgProps {
//   fill: string;
//   // Add other props specific to your SVG components here
// }

const AuthForm: React.FC<FormProps> = ({ page }) => {
  const [passwordType, setPasswordType] = useState("password");

  const schema = page === "register" ? SignupSchema : LoginSchema;

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const initialValues: FormValues = {
    name: "",
    email: "",
    password: "",
  };

  // Функция для обработки отправки формы
  const handleOnSubmit = (values: FormValues) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleOnSubmit}
      validationSchema={schema}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        isValid,
        dirty,
      }) => (
        <Form>
          {page === "register" && (
            <>
              <label htmlFor="name">
                <div>
                  <UserSvg />
                  {/* <img src={UserSvg} alt="user-svg" /> */}
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
                    <img src={ErrorSvg} alt="error-svg" />
                  </>
                )}
                {touched.name && !errors.name && (
                  <img src={SuccessSvg} alt="succes-svg" />
                )}
              </label>
            </>
          )}
          <label htmlFor="email">
            <div>
              {/* <EmailSvg
                fill="#fafafa"
                className={`${
                  errors.email && touched.email ? styles.error_fill : ""
                } ${!errors.email && touched.email ? styles.success_fill : ""}`}
              /> */}
            </div>
            <Field
              autoComplete="off"
              name="email"
              type="email"
              placeholder="Email"
              // className={`${styles.input} ${
              //   errors.email && touched.email ? styles.error : ""
              // } ${!errors.email && touched.email ? styles.success : ""}`}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {touched.email && errors.email && (
              <>
                <p>{errors.email}</p>
                <img src={ErrorSvg} alt="error-svg" />
              </>
            )}
            {touched.name && !errors.name && (
              <img src={SuccessSvg} alt="succes-svg" />
            )}
          </label>
          <label htmlFor="password">
            <div>
              {/* <PassSvg
                fill="#fafafa"
                className={` ${
                  errors.password && touched.password ? styles.error_fill : ""
                } ${
                  !errors.password && touched.password
                    ? styles.success_fill
                    : ""
                } ${
                  errors.password?.includes("secure") ? styles.warning_fill : ""
                }`}
              /> */}
            </div>
            <Field
              autoComplete="off"
              name="password"
              type={passwordType}
              placeholder="Password"
              // className={`${styles.input} ${
              //   errors.password && touched.password ? styles.error : ""
              // } ${!errors.password && touched.password ? styles.success : ""} ${
              //   errors.password?.includes("secure") ? styles.warning : ""
              // }`}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            <div onClick={togglePassword}>
              {/* {passwordType === "password" ? (
                <BsEyeSlash fill="#fafafa" />
              ) : (
                <BsEye fill="#fafafa" />
              )} */}
            </div>
            {errors.password?.includes("secure") ? (
              <div>
                <p> {errors.password}</p>
                {/* <WorningSvg className={styles.warning_svg} /> */}
              </div>
            ) : (
              touched.password &&
              errors.password && (
                <>
                  <p>{errors.password}</p>
                  <img src={ErrorSvg} alt="error-svg" />
                </>
              )
            )}
            {touched.password && !errors.password && (
              <>
                <p>Password is secure</p>

                <img src={SuccessSvg} alt="succes-svg" />
              </>
            )}
            {/* {errors.password?.includes('secure') && (
                        <>
                          <p className={styles.warning_message}>
                         
                            {errors.password}
                          </p>
                          <WorningSvg className={styles.worningSvg_svg} />
                        </>
                      )} */}
          </label>
          <button
            // className={styles.submit_button}
            disabled={!isValid && !dirty}
            type="submit"
            // onClick={() => handleOnSubmit(values)}
          >
            {page === "signin" ? "Sign in" : "Sign up"}
          </button>
          {/* Остальной JSX код формы... */}
        </Form>
      )}
    </Formik>
  );
};

export default AuthForm;
