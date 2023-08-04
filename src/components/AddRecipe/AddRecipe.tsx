import React, { useState, useEffect } from "react";
import styles from "./AddRecipe.module.css";
import { Formik, Form, Field, FormikHelpers } from "formik";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { fetchCategories } from "../../redux/categoriesSlice/categoriesThunk";
import { selectMemoCategoryList } from "../../redux/categoriesSlice/categoriesSelector";

import { AddRecipeDropdown } from "./AddRecipeDropdown/AddRecipeDropdown";
import UploadImage from "./UploadImage/UploadImage";
import { AsimetricRoundedBtn } from "../Buttons/AsimetricRoundedBtn";

interface FormValues {
  title: string;
  about: string;
  category: string;
  time: string;
  description: string;
}
const timeForCook: string[] = [];
for (let i = 15; i <= 300; i += 5) {
  timeForCook.push(`${i}`);
}

export const AddRecipe: React.FC = () => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector(selectMemoCategoryList);
  const [selectedCategory, setSelectedCategory] = useState<string>("Beef");
  const [selectedTime, setSelectedTime] = useState<string>("15");
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleImageSelected = (file: File | null) => {
    setSelectedImage(file);
  };

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  const handleSumbitForm = (
    values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {
    console.log(selectedImage);
    setTimeout(() => {
      alert(
        JSON.stringify(
          {
            ...values,
            category: selectedCategory,
            time: selectedTime,
            image: selectedImage,
          },
          null,
          2
        )
      );
      setSubmitting(false);
    }, 400);
  };

  return (
    <>
      <Formik
        initialValues={{
          title: "",
          about: "",
          category: "Beef",
          time: "",
          description: "",
        }}
        onSubmit={handleSumbitForm}
      >
        {({
          // values,
          // errors,
          // touched,
          // handleChange,
          // handleBlur,

          isSubmitting,
        }) => (
          <Form className={styles.add_form}>
            <Field
              type="file"
              component={UploadImage}
              onImageSelected={handleImageSelected}
            />
            <Field
              type="text"
              name="title"
              placeholder="Enter item title"
              className={styles.title_input}
            />
            <Field
              type="text"
              name="about"
              placeholder="Enter about recipe"
              className={styles.title_input}
            />
            <Field
              name="category"
              component={AddRecipeDropdown}
              options={categories}
              setSelectedOption={setSelectedCategory}
              selectedOption={selectedCategory}
              type="Category"
            />
            <Field
              name="Cooking time"
              component={AddRecipeDropdown}
              options={timeForCook}
              setSelectedOption={setSelectedTime}
              selectedOption={selectedTime}
              type="Cooking time"
            />
            <div className="w-full">
              <h3 className={styles.description_title}>Ingredients</h3>
              <Field
                as="textarea"
                name="description"
                type="textarea"
                placeholder="Enter recipe"
                className={styles.description_input}
              />
            </div>
            <div className="w-full">
              <h3 className={styles.description_title}>Recipe Preparation</h3>
              <Field
                as="textarea"
                name="description"
                type="textarea"
                placeholder="Enter recipe"
                className={styles.description_input}
              />
            </div>
            <AsimetricRoundedBtn
              btnType="submit"
              text="Add"
              style="bg-accentDark text-whiteText w-[129px] self-start"
            />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};
