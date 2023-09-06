import { useState } from "react";
import styles from "./SearchDropdown.module.css";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { selectSearchParam } from "../../../redux/searchSlice/searchSelector";
import { changeParam } from "../../../redux/searchSlice/searchSlice";

import { FiChevronDown } from "react-icons/fi";

const options = ["Title", "Ingredient"];

export const SearchDropdown = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const selectedOption = useAppSelector(selectSearchParam);
  const dispatch = useAppDispatch();

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value: string) => () => {
    dispatch(changeParam(value));
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown_wrapper}>
      <p className={`${styles.dropdown_title} dark:text-whiteText`}>
        Search by:
      </p>
      <div
        className={`${styles.dropdown_header} dark:text-[#8B919D] dark:border dark:border-whiteText dark: bg-inherit dark:border-opacity-[0.5]`}
        onClick={toggling}
      >
        {selectedOption}
        <FiChevronDown stroke={"#8BAA36"} size={14} />
      </div>
      {isOpen && (
        <div className={`${styles.dropdown_list_container} `}>
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
