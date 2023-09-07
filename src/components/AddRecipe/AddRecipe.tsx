import React, { useEffect } from "react";
import styles from "./AddRecipe.module.css";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";

import { fetchCategories } from "../../redux/categoriesSlice/categoriesThunk";
import { fetchIngredients } from "../../redux/ingredientsSlice/ingredientsThunk";
import { fetchAddOwnRecipe } from "../../redux/ownRecipeSlice/ownRecipeThunk";
import { selectMemoCategoryList } from "../../redux/categoriesSlice/categoriesSelector";
import { selectMemoIngredientsList } from "../../redux/ingredientsSlice/ingredientSelect";
import { selectTheme } from "../../redux/themeSlice/themeSelector";

import { AddRecipeSchema } from "../../schemas/yupAddRecipeSchema";
import { Formik, Form, Field, FormikHelpers, FieldArray } from "formik";
import { IAddOwnRecipeForm, IIngredient } from "../../types/recipeListTypes";

import { AddRecipeDropdown } from "./AddRecipeDropdown/AddRecipeDropdown";
import { AddIngredient } from "./AddIngedient/AddIngredient";
import { AsimetricRoundedBtn } from "../Buttons/AsimetricRoundedBtn";
import { UploadImage } from "./UploadImage/UploadImage";
import placeHolder from "../../images/best-gordon-ramsay-memes-10.jpg";
import { useNavigate } from "react-router-dom";

const timeForCook: string[] = [];
for (let i = 15; i <= 300; i += 5) {
  timeForCook.push(`${i} min`);
}

const measurementOptions = ["tbs", "tsp", "kg", "g", "ltr", "ml"];

export const AddRecipe: React.FC = () => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector(selectMemoCategoryList);
  const ingredientOptions = useAppSelector(selectMemoIngredientsList);
  const isDarkMode = useAppSelector(selectTheme);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchIngredients());
    dispatch(fetchCategories());
  }, []);

  const handleSumbitForm = async (
    values: IAddOwnRecipeForm,
    formikHelpers: FormikHelpers<IAddOwnRecipeForm>
  ) => {
    const updatedIngredients = values.ingredients.map((ingredientData) => ({
      id: ingredientData.ingredient,
      measure: ingredientData.measure,
    }));

    const formData = new FormData();
    if (values.preview) {
      formData.append("preview", values.preview);
    }
    if (values.preview === "") {
      formData.append("preview", placeHolder);
    }
    formData.append("title", values.title);
    formData.append("description", values.description);
    formData.append("category", values.category);
    formData.append("time", values.time);
    formData.append("ingredients", JSON.stringify(updatedIngredients));
    formData.append("instructions", values.instructions);
    formData.append("isPublic", values.isPublic.toString());

    const data = await dispatch(fetchAddOwnRecipe(formData));
    console.log("data", data);

    formikHelpers.setSubmitting(false);
    formikHelpers.resetForm();
    navigate("/myRecipes");
  };

  const initialValues: IAddOwnRecipeForm = {
    preview: "",
    title: "",
    description: "",
    category: "Beef",
    time: "",
    instructions: "",
    ingredients: Array.from({ length: 1 }, () => ({
      ingredient: "",
      measure: "",
    })),
    isPublic: false,
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
            <div className={styles.form_container}>
              <Field
                type="file"
                component={UploadImage}
                onImageSelected={(file: File) => {
                  setFieldValue("preview", file);
                }}
              />
              <div className={styles.form_subcontainer}>
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
                    setSelectedOption={(value: any) =>
                      setFieldValue("time", value)
                    }
                    selectedOption={values.time}
                    isDarkMode={isDarkMode}
                    type="Cooking time"
                  />
                  {touched.time && errors.time && (
                    <p className={styles.error_message}>{errors.time}</p>
                  )}
                </div>
              </div>
            </div>

            <FieldArray name="ingredients">
              {(arrayHelpers) => (
                <AddIngredient
                  ingredientOptions={ingredientOptions}
                  measurementOptions={measurementOptions}
                  ingredients={arrayHelpers.form.values.ingredients}
                  push={arrayHelpers.push}
                  remove={arrayHelpers.remove}
                  titleStyle={`${styles.instructions_title} dark:text-whiteText`}
                  isDarkMode={isDarkMode}
                  form={{
                    touched,
                    errors: errors as { ingredients: IIngredient[] },
                  }}
                />
              )}
            </FieldArray>
            <div className="w-full xl:w-[610px]">
              <h3
                className={`${styles.instructions_title} dark:text-whiteText`}
              >
                Recipe Preparation
              </h3>
              <div className="w-full relative">
                <Field
                  as="textarea"
                  name="instructions"
                  type="textarea"
                  placeholder="Enter recipe"
                  className={`${styles.instructions_input} dark:border-[#393A42] dark:text-whiteText`}
                />
                {touched.instructions && errors.instructions && (
                  <p className={styles.error_message}>{errors.instructions}</p>
                )}
              </div>
              <label className="flex items-center space-x-2">
                <Field
                  type="checkbox"
                  name="isPublic"
                  className="accent-accentMain w-4 h-4"
                />
                <span className="dark:text-whiteText">
                  Do you want to make your recipe available for all users ?
                </span>
              </label>
            </div>
            <AsimetricRoundedBtn
              btnType="submit"
              text="Add"
              style="bg-accentDark dark:bg-accentMain 
              hover:bg-accentDarker hover:dark:bg-overlayBackdrop  border-transparent
              hover:border-accentMain hover:dark:border-whiteText transition text-whiteText w-[129px] self-start mb-12
              md:w-[162px] md:h-[52px] md:flex md:items-center md:justify-center"
            />
          </Form>
        )}
      </Formik>
    </>
  );
};
