import { Field, FormikTouched } from "formik";
import styles from "./AddIngedient.module.css";
import React from "react";
import { IngredientFieldDropdown } from "./IngredientFieldDropdown/IngredientFieldDropdown";
import { FormValues, Ingredient } from "../AddRecipe";
import { BiPlus, BiMinus } from "react-icons/bi";
import { MeasurementDropdown } from "./IngredientFieldDropdown/MeasurementDropdown";
import { MdOutlineClose } from "react-icons/md";

export interface IIngredientOption {
  _id: string;
  title: string;
}

interface IAddIngredientProps {
  ingredients: Ingredient[];
  ingredientOptions: IIngredientOption[];
  measurementOptions: string[];
  push: (ingredient: Ingredient) => void;
  remove: (index: number) => void;
  titleStyle: string;
  isDarkMode: boolean;
  form: {
    touched: FormikTouched<FormValues>;
    errors: {
      ingredients: Ingredient[];
    };
  };
}

export const AddIngredient: React.FC<IAddIngredientProps> = ({
  ingredientOptions,
  measurementOptions,
  ingredients,
  remove,
  push,
  titleStyle,
  form: { touched, errors },
  isDarkMode,
}) => {
  return (
    <div className="w-full flex flex-col gap-6 xl:w-[610px] ">
      <div className={styles.title_wrapper}>
        <h3 className={`${titleStyle} mb-0`}>Ingredients</h3>
        <div className={styles.counter_wrapper}>
          <button
            type="button"
            disabled={ingredients.length === 1 && true}
            onClick={() => remove(ingredients.length - 1)}
          >
            <BiMinus
              className={`${styles.couner_btn_icon} ${
                ingredients.length === 1 && "fill-gray-400 dark:fill-whiteText"
              }`}
            />
          </button>
          <p className="dark:text-whiteText md:text-customSm">
            {ingredients.length}
          </p>
          <button
            type="button"
            onClick={() =>
              push({
                ingredient: "",
                measure: "",
              })
            }
          >
            <BiPlus className={styles.couner_btn_icon} />
          </button>
        </div>
      </div>

      {ingredients.map((_ingredient: any, index: number) => (
        <div key={index} className={styles.addIngredient_wrapper}>
          <div className={styles.ingredient_input_wrapper}>
            <div className="w-full relative">
              <Field
                name={`ingredients.${index}.ingredient`}
                component={IngredientFieldDropdown}
                options={ingredientOptions}
                isDarkMode={isDarkMode}
              />
              {touched.ingredients?.[index]?.ingredient &&
                errors.ingredients && (
                  <p className={styles.error_message}>
                    {errors.ingredients[index]?.ingredient}
                  </p>
                )}
            </div>
            <div className="w-full relative">
              <Field
                name={`ingredients.${index}.measure`}
                component={MeasurementDropdown}
                options={measurementOptions}
                isDarkMode={isDarkMode}
                className=" max-w-[48px] py-2 px-4 border border-gray-300 rounded"
              />
              {touched.ingredients?.[index]?.measure && errors.ingredients && (
                <p className={styles.error_message}>
                  {errors.ingredients[index]?.measure}
                </p>
              )}
            </div>
          </div>
          {ingredients.length > 1 && (
            <button
              className="dark:text-whiteText"
              type="button"
              onClick={() => remove(index)}
            >
              <MdOutlineClose />
            </button>
          )}
        </div>
      ))}
    </div>
  );
};
