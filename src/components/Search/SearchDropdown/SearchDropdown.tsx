import { useState } from "react";
import styles from "./SearchDropdown.module.css";

import { FiChevronDown } from "react-icons/fi";

const options = ["Title", "Ingredients"];

export const DropdownFilter = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>("Title");

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value: string) => () => {
    setSelectedOption(value);

    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown_wrapper}>
      <p className={styles.dropdown_title}>Search by:</p>
      <div className={styles.dropdown_header} onClick={toggling}>
        {selectedOption}
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
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
