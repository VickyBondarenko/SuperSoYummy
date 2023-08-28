import React from "react";
import { Formik, Form, Field, FormikHelpers } from "formik";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { selectUserInfo } from "../../redux/authSlice/authSelectors";
import { editUser } from "../../redux/authSlice/authThunk";
import { EditUserSchema } from "../../schemas/yupSchemas";
import { ReactComponent as UserSvg } from "/src/images/svg/authForm/name.svg";
import { ReactComponent as EditSvg } from "/src/images/svg/edit-01.svg";
import { UploadUserImage } from "./UploadUserImage";

import styles from "./EditUserInfo.module.css";

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
        {({ values, errors, touched, handleBlur, setFieldValue }) => (
          <Form className={styles.add_form}>
            <div className={styles.form_container}>
              <Field
                type="file"
                name="preview"
                component={UploadUserImage}
                image={values.preview}
                onImageSelected={(file: File) => {
                  setFieldValue("preview", file);
                }}
              />
              <div className={styles.form_subcontainer}>
                <div className="w-full relative">
                  <label
                    htmlFor="name"
                    className="relative mb-3 md:mb-6 hover:fill-accentMain group"
                  >
                    <UserSvg
                      className={`${styles.form_svg} dark:fill-whiteText group-hover:fill-accentMain dark:group-hover:fill-accentMain`}
                    />
                    <EditSvg
                      className={`${styles.form_editSvg} dark:fill-whiteText group-hover:fill-accentMain dark:group-hover:fill-accentMain`}
                    />
                    <Field
                      autoComplete="off"
                      type="text"
                      name="userName"
                      placeholder="Name"
                      onBlur={handleBlur}
                      className={`${styles.form_input} dark:text-whiteText`}
                    />
                    {touched.userName && errors.userName && (
                      <p className={styles.error_message}>{errors.userName}</p>
                    )}
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className={`${styles.form_btn}  border-accentMain bg-accentMain  text-whiteText hover:bg-accentDark dark:hover:text-accentMain    dark:hover:bg-whiteText dark:hover:border-accentMain`}
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
