import * as Yup from "yup";

export const AddRecipeSchema = Yup.object().shape({
  title: Yup.string()
    .typeError("Must be string")
    .required("Enter title of recipe")
    .trim()
    .min(1, "Your username is too short")
    .max(30, "Max 30 symbols"),
  description: Yup.string()
    .typeError("Must be string")
    .trim()
    .required("Please, give brief description of the dish")
    .max(70, "Max 70 symbols"),
  category: Yup.string()
    .typeError("Must be string")
    .trim()
    .required("Choose category from list"),
  time: Yup.string()
    .typeError("Must be string")
    .trim()
    .required("Provide cooking time"),
  instructions: Yup.string()
    .typeError("Must be string")
    .trim()
    .max(400, "Max 400 symbols")
    .required("Provide cooking instructions"),
  ingredients: Yup.array().of(
    Yup.object().shape({
      ingredient: Yup.string().required("Choose ingredient from list"),
      measure: Yup.string().required("Add amount of ingredient"),
    })
  ),
});
