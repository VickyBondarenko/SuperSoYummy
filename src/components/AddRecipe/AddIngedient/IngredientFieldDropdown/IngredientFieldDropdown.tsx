import React from "react";
// import styles from "./IngredientFieldDropdown.module.css";
import { FieldInputProps } from "formik";
import Select from "react-select";
import { IIngredientOption } from "../AddIngredient";
import { ingrSelectStyles } from "../../../../styles/reactSelectStyles";

interface IngredientFieldProps {
  options: IIngredientOption[];
  field: FieldInputProps<string>;
  isDarkMode: boolean;
}

export const IngredientFieldDropdown: React.FC<IngredientFieldProps> = ({
  options,
  field,
  isDarkMode,
}) => {
  const customStyles = ingrSelectStyles(isDarkMode);

  const handleSelect = (selectedOption: any) => {
    const _id = selectedOption ? selectedOption.value : "";
    field.onChange({
      target: { name: field.name, value: _id },
    });
  };

  const formattedOptions = options.map(({ _id, title }) => ({
    value: _id,
    label: title,
  }));

  return (
    <Select
      options={formattedOptions}
      styles={customStyles}
      isSearchable={true}
      value={
        field.value
          ? formattedOptions.find((opt) => opt.value === field.value)
          : null
      }
      onChange={handleSelect}
      placeholder="Select ingredient"
    />
  );
};
