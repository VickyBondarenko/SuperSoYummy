import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { SignupSchema, LoginSchema } from "../../schemas/yupSchemas";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { registerUser, loginUser } from "../../redux/authSlice/authThunk";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { ReactComponent as SuccessSvg } from "../../images/svg/authForm/success.svg";
import { ReactComponent as EmailSvg } from "/src/images/svg/authForm/email.svg";
import { ReactComponent as PassSvg } from "/src/images/svg/authForm/password.svg";
import { ReactComponent as UserSvg } from "/src/images/svg/authForm/name.svg";
import styles from "./Auth.module.css";
import { IFormProps } from "../../types/authTypes";
import { IFormValues } from "../../types/authTypes";

const AuthForm: React.FC<IFormProps> = ({ page, title }) => {
  const [passwordType, setPasswordType] = useState("password");
  const dispatch = useAppDispatch();

  const schema = page === "register" ? SignupSchema : LoginSchema;

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const userValues =
    page === "signin"
      ? {
          email: "",
          password: "",
        }
      : { name: "", email: "", password: "" };

  const initialValues: IFormValues = { ...userValues };

  const handleOnSubmit = (values: IFormValues) => {
    console.log(values);
    page === "signin"
      ? dispatch(loginUser(values))
      : dispatch(registerUser(values));
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
                <UserSvg
                  className={`${styles.form_svg} ${
                    touched.name && errors.name && "fill-red-600"
                  } ${!errors.name && touched.name && "fill-[#3CBC81]"} `}
                />
                <Field
                  autoComplete="off"
                  type="text"
                  name="name"
                  placeholder="Name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  className={`${styles.form_input} ${
                    touched.name &&
                    errors.name &&
                    " border-red-600 outline-red-600"
                  } ${
                    !errors.name &&
                    touched.name &&
                    "border-[#3CBC81] outline-[#3CBC81]"
                  }`}
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
                touched.email && errors.email && "fill-red-600"
              } ${!errors.email && touched.email && "fill-[#3CBC81]"} `}
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
                touched.email &&
                errors.email &&
                " border-red-600 outline-red-600"
              } ${
                !errors.email &&
                touched.email &&
                "border-[#3CBC81] outline-[#3CBC81]"
              }`}
            />
            {touched.email && errors.email && (
              <p className={styles.form_errorMsg}>{errors.email}</p>
            )}
            {touched.email && !errors.email && (
              <SuccessSvg className={styles.form_svg_success} />
            )}
          </label>
          <label htmlFor="password" className="relative  mb-7 md:mb-[50px]">
            <PassSvg
              className={`${styles.form_svg} ${
                touched.password && errors.password && "fill-red-600"
              } ${!errors.password && touched.password && "fill-[#3CBC81]"} `}
            />
            <Field
              autoComplete="off"
              name="password"
              type={passwordType}
              placeholder="Password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              className={`${styles.form_input} ${
                touched.password &&
                errors.password &&
                " border-red-600 outline-red-600"
              } ${
                !errors.password &&
                touched.password &&
                "border-[#3CBC81] outline-[#3CBC81]"
              }`}
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
                <p className={`${styles.form_errorMsg} ${"text-[#3CBC81]"}`}>
                  Password is secure
                </p>
                <SuccessSvg className={styles.form_svg_success} />
              </>
            )}
          </label>
          <button
            disabled={!isValid || !dirty}
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
