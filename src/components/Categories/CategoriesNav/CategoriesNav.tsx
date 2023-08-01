import React, { useEffect, useRef } from "react";
import styles from "./Categories.module.css";

import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { changeCategory } from "../../../redux/categoriesSlice/categoriesSlice";
import { fetchCategories } from "../../../redux/categoriesSlice/categoriesThunk";
import {
  selectMemoCategoryList,
  selectCategory,
} from "../../../redux/categoriesSlice/categoriesSelector";

import { Draggable } from "../../ServiceComponents/Draggable";

export const CategoriesNav: React.FC = () => {
  const listRef = useRef(null);

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  const dispatch = useAppDispatch();
  const categoryList = useAppSelector(selectMemoCategoryList);
  const activeCategory = useAppSelector(selectCategory);

  return (
    <Draggable innerRef={listRef} rootClass={"drag"}>
      <div id="scrollToCatWrap" className={styles.categories_wrapper}>
        <ul className={styles.categories_nav_list}>
          {categoryList.map((item: string, index: number) => (
            <li
              key={index}
              onClick={() => dispatch(changeCategory(item))}
              className={`${styles.categories_nav_item} ${
                item !== activeCategory
                  ? "text-listUnderline"
                  : "text-accentMain scale-125 duration-400"
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Draggable>
  );
};
