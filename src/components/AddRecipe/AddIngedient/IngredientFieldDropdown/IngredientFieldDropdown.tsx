import React from "react";
import { ingrSelectStyles } from "../../../../styles/reactSelectStyles";
import Select from "react-select";

import { FieldInputProps } from "formik";

import { IIngredientOption } from "../AddIngredient";

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
