import React, { useState, useEffect } from "react";
import styles from "./AddRecipe.module.css";
import { Formik, Form, Field, FormikHelpers } from "formik";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { fetchCategories } from "../../redux/categoriesSlice/categoriesThunk";
import { selectMemoCategoryList } from "../../redux/categoriesSlice/categoriesSelector";

import { AddRecipeDropdown } from "./AddRecipeDropdown/AddRecipeDropdown";

interface FormValues {
  title: string;
  about: string;
  category: string;
}

export const AddRecipe: React.FC = () => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector(selectMemoCategoryList);
  const [selectedCategory, setSelectedCategory] = useState<string>("Beef");

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  const handleSumbitForm = (
    values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {
    setTimeout(() => {
      alert(JSON.stringify({ ...values, category: selectedCategory }, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <Formik
      initialValues={{ title: "", about: "", category: "Beef" }}
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
          <Field type="email" name="image" />
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
            categories={categories}
            setSelectedCategory={setSelectedCategory}
            selectedCategory={selectedCategory}
          />

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};
