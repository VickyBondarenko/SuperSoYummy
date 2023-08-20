import React from "react";
import styles from "./EditUserInfo.module.css";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { ReactComponent as UserSvg } from "/src/images/svg/authForm/name.svg";
// import { selectTheme } from "../../redux/themeSlice/themeSelector";
import { selectUserInfo } from "../../redux/authSlice/authSelectors";
import { Formik, Form, Field, FormikHelpers } from "formik";
import { UploadUserImage } from "./UploadUserImage";
import { EditUserSchema } from "../../schemas/yupSchemas";
import { editUser } from "../../redux/authSlice/authThunk";

export interface IEditUserInfo {
  userName: string;
  preview: string | File;
}

interface IModalProps {
  handleCloseModal: () => void;
}

export const EditUserInfo: React.FC<IModalProps> = ({ handleCloseModal }) => {
  const dispatch = useAppDispatch();
  const { name: userName, avatarURL: userAvatar } =
    useAppSelector(selectUserInfo);

  //   const isDarkMode = useAppSelector(selectTheme);

  const handleSumbitForm = (
    values: IEditUserInfo,
    formikHelpers: FormikHelpers<IEditUserInfo>
  ) => {
    const formData = new FormData();

    formData.append("avatar", values.preview);
    formData.append("name", values.userName);

    dispatch(editUser(formData));

    formikHelpers.setSubmitting(false);
    formikHelpers.resetForm();
    handleCloseModal();
  };

  const initialValues: IEditUserInfo = {
    preview: userAvatar,
    userName: userName,
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSumbitForm}
        validationSchema={EditUserSchema}
      >
        {({ errors, touched, handleBlur, setFieldValue }) => (
          <Form className={styles.add_form}>
            <div className={styles.form_container}>
              <Field
                type="file"
                name="preview"
                component={UploadUserImage}
                onImageSelected={(file: File) => {
                  setFieldValue("preview", file);
                }}
              />
              <div className={styles.form_subcontainer}>
                <div className="w-full relative">
                  <label htmlFor="name" className="relative mb-3 md:mb-6">
                    <UserSvg className={`${styles.form_svg}  `} />
                    <Field
                      autoComplete="off"
                      type="text"
                      name="userName"
                      placeholder="Name"
                      // onChange={handleChange}
                      onBlur={handleBlur}
                      className={`${styles.form_input} `}
                    />
                    {touched.userName && errors.userName && (
                      <p className={styles.error_message}>{errors.userName}</p>
                    )}
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="w-[282px] md:w-[400px] text-center py-[21px] rounded-md border border-accentMain text-whiteText dark:hover:text-accentMain  bg-accentMain  hover:bg-accentDark dark:hover:bg-whiteText dark:hover:border-accentMain font-main text-[14px] md:text-[16px] leading-[18px]"
              >
                Save changes
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};
