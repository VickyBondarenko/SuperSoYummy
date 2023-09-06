import React from "react";
import styles from "./ShoppingList.module.css";

import { ReactComponent as CloseSvg } from "../../images/svg/closeMenuIcon.svg";
import { Pagination } from "../Pagination/Pagination";

import { IShoppingItem } from "../../types/shoppingListTypes";
import { IngredientsTableHeader } from "../Recipe/Ingredients/IngredientsTableHeader/IngredientsTableHeader";

interface IShoppingListProps {
  shoppingListData: IShoppingItem[];
  deleteFunc: (_id: string) => void;
  totalPages: number;
  currentPage: number;
  onChangePage: (curPage: number) => void;
}

export const ShoppingList: React.FC<IShoppingListProps> = ({
  shoppingListData,
  deleteFunc,
  totalPages,
  currentPage,
  onChangePage,
}) => {
  return (
    <div className={styles.wrapper}>
      <IngredientsTableHeader
        wrapperStyle="flex justify-between bg-accentMain rounded-lg font-semibold  text-customShoppingList md:text-[18px] md:leading-[26px] text-whiteText p-[10px] md:p-5 xl:px-10 xl:py-[21px]"
        actionStyle="flex gap-6 md:gap-[78px] xl:gap-[142px]"
        action="Remove"
        itemName="Products"
      />
      <ul className={styles.list_wrapper}>
        {shoppingListData.map(({ _id, measure, ttl, thb }) => (
          <li key={_id}>
            <div
              className={`${styles.item_wrapper} dark:border-whiteText dark:border-opacity-[0.3]`}
            >
              <div className={styles.item_image_wrapper}>
                <img
                  src={thb}
                  alt={ttl}
                  className={`${styles.item_img} dark:bg-accentHalfDark`}
                  style={{ aspectRatio: "1 / 1" }}
                />
                <h2 className={`${styles.item_title} dark:text-whiteText`}>
                  {ttl}
                </h2>
              </div>
              <div className={styles.item_measure_wrapper}>
                <p className={`${styles.item_measure} dark:text-whiteText`}>
                  {measure}
                </p>
                <CloseSvg
                  onClick={() => deleteFunc(_id)}
                  className={`${styles.item_closeSvg} dark:stroke-whiteText dark:hover:stroke-accentMain`}
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
      {totalPages !== 1 && (
        <Pagination
          onChangePage={onChangePage}
          currentpage={currentPage}
          totalPages={totalPages}
        />
      )}
    </div>
  );
};
