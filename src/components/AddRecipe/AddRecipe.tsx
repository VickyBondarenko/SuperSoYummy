import React, { useState, useEffect } from "react";
import styles from "./AddRecipe.module.css";
import { Formik, Form, Field, FormikHelpers, FieldArray } from "formik";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { fetchCategories } from "../../redux/categoriesSlice/categoriesThunk";
import { fetchIngredients } from "../../redux/ingredientsSlice/ingredientsThunk";
import { selectMemoCategoryList } from "../../redux/categoriesSlice/categoriesSelector";
import { selectMemoIngredientsList } from "../../redux/ingredientsSlice/ingredientSelect";

import { AddRecipeDropdown } from "./AddRecipeDropdown/AddRecipeDropdown";
import UploadImage from "./UploadImage/UploadImage";
import { AsimetricRoundedBtn } from "../Buttons/AsimetricRoundedBtn";
import { AddIngredient } from "./AddIngedient/AddIngredient";

import { AddRecipeSchema } from "../../schemas/yupAddRecipeSchema";
import { selectTheme } from "../../redux/themeSlice/themeSelector";

export interface Ingredient {
  ingredient?: string;
  measure?: string;
}

export interface FormValues {
  title: string;
  description: string;
  category: string;
  time: string;
  instructions: string;
  ingredients: Ingredient[];
}
const timeForCook: string[] = [];
for (let i = 15; i <= 300; i += 5) {
  timeForCook.push(`${i}`);
}

const measurementOptions = ["tbs", "tsp", "kg", "g", "ltr", "ml"];

export const AddRecipe: React.FC = () => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector(selectMemoCategoryList);
  const ingredientOptions = useAppSelector(selectMemoIngredientsList);
  const isDarkMode = useAppSelector(selectTheme);
  const [selectedImage, setSelectedImage] = useState<File | null | string>(
    null
  );

  const handleImageSelected = (file: File | null) => {
    setSelectedImage(file);
  };

  useEffect(() => {
    dispatch(fetchIngredients());
    dispatch(fetchCategories());
  }, []);

  const handleSumbitForm = (
    values: FormValues,
    formikHelpers: FormikHelpers<FormValues>
  ) => {
    console.log(selectedImage);
    setTimeout(() => {
      alert(
        JSON.stringify(
          {
            ...values,
            image: selectedImage
              ? selectedImage
              : "../../images/best-gordon-ramsay-memes-10.jpg",
          },
          null,
          2
        )
      );
      formikHelpers.setSubmitting(false);
    }, 400);
  };

  const initialValues: FormValues = {
    title: "",
    description: "",
    category: "Beef",
    time: "",
    instructions: "",
    ingredients: Array.from({ length: 1 }, () => ({
      ingredient: "",
      measure: "",
    })),
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSumbitForm}
        validationSchema={AddRecipeSchema}
      >
        {({ values, errors, touched, handleBlur, setFieldValue }) => (
          <Form className={styles.add_form}>
            <Field
              type="file"
              component={UploadImage}
              onImageSelected={handleImageSelected}
            />

            <div className="w-full relative">
              <Field
                type="text"
                name="title"
                onBlur={handleBlur}
                placeholder="Enter item title"
                className={`${styles.title_input} dark:border-b-[#393A42] dark:text-whiteText `}
              />
              {touched.title && errors.title && (
                <p className={styles.error_message}>{errors.title}</p>
              )}
            </div>
            <div className="w-full relative">
              <Field
                type="text"
                name="description"
                placeholder="Enter about recipe"
                className={`${styles.title_input} dark:border-b-[#393A42] dark:text-whiteText `}
              />
              {touched.description && errors.description && (
                <p className={styles.error_message}>{errors.description}</p>
              )}
            </div>

            <div className="w-full relative">
              <Field
                name="category"
                component={AddRecipeDropdown}
                options={categories}
                setSelectedOption={(value: any) =>
                  setFieldValue("category", value)
                }
                selectedOption={values.category}
                isDarkMode={isDarkMode}
                type="Category"
              />
              {touched.category && errors.category && (
                <p className={styles.error_message}>{errors.category}</p>
              )}
            </div>

            <div className="w-full relative">
              <Field
                name="time"
                component={AddRecipeDropdown}
                options={timeForCook}
                setSelectedOption={(value: any) => setFieldValue("time", value)}
                selectedOption={values.time}
                isDarkMode={isDarkMode}
                type="Cooking time"
              />
              {touched.time && errors.time && (
                <p className={styles.error_message}>{errors.time}</p>
              )}
            </div>

            <FieldArray name="ingredients">
              {(arrayHelpers) => (
                <AddIngredient
                  ingredientOptions={ingredientOptions}
                  measurementOptions={measurementOptions}
                  ingredients={arrayHelpers.form.values.ingredients}
                  push={arrayHelpers.push}
                  remove={arrayHelpers.remove}
                  titleStyle={styles.instructions_title}
                  form={{
                    touched,
                    errors: errors as { ingredients: Ingredient[] },
                  }}
                />
              )}
            </FieldArray>
            <div className="w-full">
              <h3 className={styles.instructions_title}>Recipe Preparation</h3>
              <div className="w-full relative">
                <Field
                  as="textarea"
                  name="instructions"
                  type="textarea"
                  placeholder="Enter recipe"
                  className={styles.instructions_input}
                />
                {touched.instructions && errors.instructions && (
                  <p className={styles.error_message}>{errors.instructions}</p>
                )}
              </div>
            </div>
            <AsimetricRoundedBtn
              btnType="submit"
              text="Add"
              style="bg-accentDark text-whiteText w-[129px] self-start mb-12"
            />
          </Form>
        )}
      </Formik>
    </>
  );
};
