import React, { useState } from "react";
import styles from "./AddRecipeDropdown.module.css";

import { FiChevronDown } from "react-icons/fi";

interface IDropdownProps {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

export const AddRecipeDropdown: React.FC<IDropdownProps> = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value: string) => () => {
    setSelectedCategory(value);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown_wrapper}>
      <p className={styles.dropdown_title}>Category</p>
      <div className={styles.dropdown_header} onClick={toggling}>
        {selectedCategory}
        <FiChevronDown stroke={"#8BAA36"} size={14} />
      </div>
      {isOpen && (
        <div className={styles.dropdown_list_container}>
          <ul className={styles.dropdown_list}>
            {categories.map((option) => (
              <li
                className={styles.dropdown_item}
                onClick={onOptionClicked(option)}
                key={Math.random()}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
