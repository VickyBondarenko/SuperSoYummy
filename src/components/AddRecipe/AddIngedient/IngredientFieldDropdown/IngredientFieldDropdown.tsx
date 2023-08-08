import React from "react";
import styles from "./IngredientFieldDropdown.module.css";
import { FieldInputProps } from "formik";
import Select from "react-select";
import { IIngredientOption } from "../AddIngredient";

interface IngredientFieldProps {
  options: IIngredientOption[];
  field: FieldInputProps<string>;
}

export const IngredientFieldDropdown: React.FC<IngredientFieldProps> = ({
  options,
  field,
}) => {
  const customStyles = {
    control: (provided: any, state: { isFocused: boolean }) => ({
      ...provided,
      height: "100%",
      border: "2px solid #ccc",
      // dark border #393A42
      outline: state.isFocused && "2px solid #8BAA36",
      borderRadius: "4px",
      backgroundColor: "transparent",
      transition: "all 0.3s",
      "&:hover": {
        border: "2px solid black",
      },
    }),
    valueContainer: (provided: any) => ({
      ...provided,
      height: "53px",
      width: "150px",
      backgroundColor: "transparent",
      cursor: "text",
    }),
    dropdownIndicator: (provided: any) => ({
      ...provided,
      cursor: "pointer",
      color: "#8BAA36",
      transition: "all 0.3s",
      "&:hover": {
        color: "#8BAA36",
      },
    }),
    option: (provided: any, state: { isSelected: any }) => ({
      ...provided,
      backgroundColor: "white",
      textDecoration: state.isSelected ? "underline" : "none",
      color: state.isSelected ? "#8BAA36" : "rgba(0, 0, 0, 0.5)",
      cursor: "pointer",
      height: "100%",

      transition: "all 0.3s",
      "&:hover": {
        textDecoration: "underline",
        color: "#8BAA36",
      },
    }),
    menu: (provided: any) => ({
      ...provided,
      zIndex: 9999,
    }),
    menuList: (provided: any) => ({
      ...provided,
      maxHeight: "200px",
      transition: "all 0.3s",
      border: "2px solid transparent",
      overflowY: "auto",
      "&:hover": {
        border: "2px solid #ccc",
      },
      scrollbarWidth: "thin",
      "&::-webkit-scrollbar": {
        width: "8px",
      },
      "&::-webkit-scrollbar-thumb": {
        background: "#8BAA36",
        borderRadius: "10px",
      },
      "&::-webkit-scrollbar-track": {
        background: "rgba(217, 217, 217, 0.1)",
      },
      scrollbarColor: "#8BAA36 rgba(217, 217, 217, 0.1)",
    }),
  };

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
    <div className={styles.ingr_input_wrapper}>
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
    </div>
  );
};
