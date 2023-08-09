import React from "react";
import Select from "react-select";
// import { useMediaQuery } from "react-responsive";
import styles from "./AddRecipeDropdown.module.css";
import { timeCatSelectStyles } from "../../../styles/reactSelectStyles";

interface IDropdownProps {
  isDarkMode: boolean;
  options: string[];
  selectedOption: string;
  setSelectedOption: (value: string) => void;
  type: "Cooking time" | "Category";
}

export const AddRecipeDropdown: React.FC<IDropdownProps> = ({
  options,
  selectedOption,
  setSelectedOption,
  type,
  isDarkMode,
}) => {
  // const isTablet = useMediaQuery({ query: "(min-width: 768px)" });
  // const isDesktop = useMediaQuery({
  //   query: "(min-width: 1440px)",
  // });
  const customStyles = timeCatSelectStyles(isDarkMode);

  const selectOptions = options.map((option) => ({
    value: option,
    label: option,
  }));

  return (
    <div
      className={`${styles.dropdown_wrapper} dark:border-b-[#393A42] dark:text-gray-500 `}
    >
      <p className={styles.dropdown_title}>{type}</p>
      <div className="flex items-center">
        <Select
          options={selectOptions}
          value={{ value: selectedOption, label: selectedOption }}
          onChange={(selectedValue) =>
            setSelectedOption(selectedValue ? selectedValue.value : "")
          }
          styles={customStyles}
          placeholder="time"
        />
      </div>
    </div>
  );
};
