import React, { useState, useEffect } from "react";
import styles from "./AddRecipe.module.css";
import {
  Formik,
  Form,
  Field,
  FormikHelpers,
  FieldArray,
  // FieldProps,
} from "formik";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { fetchCategories } from "../../redux/categoriesSlice/categoriesThunk";
import { selectMemoCategoryList } from "../../redux/categoriesSlice/categoriesSelector";

import { AddRecipeDropdown } from "./AddRecipeDropdown/AddRecipeDropdown";
import UploadImage from "./UploadImage/UploadImage";
import { AsimetricRoundedBtn } from "../Buttons/AsimetricRoundedBtn";
import { IngredientField } from "./IngredientDropdown/IngredientDropdown";

interface Ingredient {
  ingredient: string;
  amount: number;
  measurement: string;
}

interface FormValues {
  title: string;
  about: string;
  category: string;
  time: string;
  description: string;
  ingredients: Ingredient[];
}
const timeForCook: string[] = [];
for (let i = 15; i <= 300; i += 5) {
  timeForCook.push(`${i}`);
}

const ingredientOptions = ["chicken", "chilli", "onion", "tomato", "potato"];

const measurementOptions = ["gr", "ml", "pcs"];

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
    formikHelpers: FormikHelpers<FormValues>
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
      formikHelpers.setSubmitting(false);
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
          ingredients: [{ ingredient: "", amount: 0, measurement: "" }],
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
              <FieldArray name="ingredients">
                {(arrayHelpers) => (
                  <div>
                    <h3 className={styles.description_title}>Ingredients</h3>
                    <div>
                      <button
                        type="button"
                        onClick={() =>
                          arrayHelpers.push({
                            ingredient: "",
                            amount: 0,
                            measurement: "",
                          })
                        }
                      >
                        Add ingredient
                      </button>
                    </div>

                    {arrayHelpers.form.values.ingredients.map(
                      (_ingredient: any, index: number) => (
                        <div key={index}>
                          <div>
                            <Field
                              name={`ingredients.${index}.ingredient`}
                              component={IngredientField}
                              options={ingredientOptions}
                            />
                          </div>
                          <div>
                            <Field
                              name={`ingredients.${index}.amount`}
                              type="number"
                              className="w-48 py-2 px-4 border border-gray-300 rounded"
                            />
                            <label htmlFor={`ingredients.${index}.measurement`}>
                              Выберите единицы измерения:
                            </label>
                            <Field
                              name={`ingredients.${index}.measurement`}
                              as="select"
                              className="w-48 py-2 px-4 border border-gray-300 rounded"
                            >
                              {measurementOptions.map((option) => (
                                <option key={option} value={option}>
                                  {option}
                                </option>
                              ))}
                            </Field>
                            <button
                              type="button"
                              onClick={() => arrayHelpers.remove(index)}
                            >
                              Удалить
                            </button>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                )}
              </FieldArray>
              {/* <Field name="ingredient">
                {(
                  { field }: FieldProps<string> // здесь тайпскрипт бьет ошибку
                ) => (
                  <IngredientField options={ingredientOptions} field={field} />
                )}
              </Field>
              <label htmlFor="amount">Введите количество:</label>
              <Field
                name="amount"
                type="number"
                className="w-48 py-2 px-4 border border-gray-300 rounded"
              />
              <Field
                name="measurement"
                as="select"
                className="w-48 py-2 px-4 border border-gray-300 rounded"
              >
                {measurementOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Field> */}
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
