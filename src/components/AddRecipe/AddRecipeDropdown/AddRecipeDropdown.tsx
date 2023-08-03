import React, { useState } from "react";
import styles from "./AddRecipeDropdown.module.css";

import { FiChevronDown } from "react-icons/fi";

interface IDropdownProps {
  options: string[];
  selectedOption: string;
  setSelectedOption: (category: string) => void;
  type: "Cooking time" | "Category";
}

export const AddRecipeDropdown: React.FC<IDropdownProps> = ({
  options,
  selectedOption,
  setSelectedOption,
  type,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value: string) => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown_wrapper}>
      <p className={styles.dropdown_title}>{type}</p>
      <div className={styles.dropdown_header} onClick={toggling}>
        {selectedOption}
        {type === "Cooking time" && " min"}
        <FiChevronDown stroke={"#8BAA36"} size={14} />
      </div>
      {isOpen && (
        <div className={styles.dropdown_list_container}>
          <ul className={styles.dropdown_list}>
            {options.map((option) => (
              <li
                className={styles.dropdown_item}
                onClick={onOptionClicked(option)}
                key={Math.random()}
              >
                {option}
                {type === "Cooking time" && " min"}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
