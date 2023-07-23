import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { SignupSchema, LoginSchema } from "../../schemas/yupSchemas";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { ReactComponent as SuccessSvg } from "../../images/svg/authForm/success.svg";
import { ReactComponent as EmailSvg } from "/src/images/svg/authForm/email.svg";
import { ReactComponent as PassSvg } from "/src/images/svg/authForm/password.svg";
// import UserSvg from "/src/images/svg/authForm/name.svg";
import { ReactComponent as UserSvg } from "/src/images/svg/authForm/name.svg";
import styles from "./Auth.module.css";

// Определение интерфейса для значений формы
interface FormValues {
  name: string;
  email: string;
  password: string;
}

interface FormProps {
  page: "signin" | "register";
  title: string;
}

const AuthForm: React.FC<FormProps> = ({ page, title }) => {
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
        <Form className={styles.form_wrapper}>
          <h1 className={styles.form_title}>{title}</h1>
          {page === "register" && (
            <>
              <label htmlFor="name" className="relative mb-3 md:mb-6">
                <UserSvg className={styles.form_svg} />
                <Field
                  autoComplete="off"
                  type="text"
                  name="name"
                  placeholder="Name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  className={styles.form_input}
                />

                {touched.name && errors.name && (
                  <p className={styles.form_errorMsg}>{errors.name}</p>
                )}
                {touched.name && !errors.name && (
                  <SuccessSvg className={styles.form_svg_success} />
                )}
              </label>
            </>
          )}
          <label htmlFor="email" className="relative  mb-3 md:mb-6">
            <EmailSvg
              className={`${styles.form_svg} ${
                touched.email && errors.email
                  ? "fill-red-600"
                  : "fill-[#3CBC81]"
              } `}
            />

            <Field
              autoComplete="off"
              name="email"
              type="email"
              placeholder="Email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              className={`${styles.form_input} ${
                errors.email ? " border-red-600" : "border-whiteText"
              } ${
                touched.email && !errors.email
                  ? " border-[#3CBC81]"
                  : "border-whiteText"
              }`}
            />
            {errors.email && (
              <p className={styles.form_errorMsg}>{errors.email}</p>
            )}
            {touched.email && !errors.email && (
              <SuccessSvg className={styles.form_svg_success} />
            )}
          </label>
          <label htmlFor="password" className="relative  mb-7 md:mb-[50px]">
            <PassSvg className={styles.form_svg} />
            <Field
              autoComplete="off"
              name="password"
              type={passwordType}
              placeholder="Password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              className={`${styles.form_input} `}
            />
            <div onClick={togglePassword}>
              {passwordType === "password" ? (
                <BsEyeSlash className={styles.form_svg_eye} />
              ) : (
                <BsEye className={styles.form_svg_eye} />
              )}
            </div>
            {touched.password && errors.password && (
              <p className={styles.form_errorMsg}>{errors.password}</p>
            )}
            {touched.password && !errors.password && (
              <>
                <p className={`${styles.form_errorMsg}`}>Password is secure</p>
                <SuccessSvg className={styles.form_svg_success} />
              </>
            )}
          </label>
          <button
            disabled={!isValid && !dirty}
            type="submit"
            className={`${styles.form_btn}  bg-accentMain`}
          >
            {page === "signin" ? "Sign in" : "Sign up"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default AuthForm;
