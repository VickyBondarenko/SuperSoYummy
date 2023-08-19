import React from "react";
import styles from "./RecipeList.module.css";
import { AsimetricRoundedBtn } from "../Buttons/AsimetricRoundedBtn";
import { HiOutlineTrash } from "react-icons/hi";
import { Pagination } from "../Pagination/Pagination";

interface IRecipeListData {
  preview: string;
  title: string;
  time: string;
  description: string;
  _id: string;
}

interface IRecipeListProps {
  recipeData: IRecipeListData[];
  deleteFunc: (_id: string) => void;
  totalPages: number;
  currentPage: number;
  onChangePage: (curPage: number) => void;
}

export const RecipeList: React.FC<IRecipeListProps> = ({
  recipeData,
  deleteFunc,
  totalPages,
  currentPage,
  onChangePage,
}) => {
  return (
    <div>
      <ul className={styles.recipe_list}>
        {recipeData.map(({ preview, title, time, description, _id }) => (
          <li
            className={`${styles.recipe_item} dark:bg-accentHalfDark`}
            key={_id}
          >
            <img
              src={preview}
              alt={title}
              className={styles.recipe_image}
              style={{ aspectRatio: "1 / 1" }}
            />
            <div className={styles.content_wrapper}>
              <div className={styles.card_top}>
                <h2 className={`${styles.recipe_title} dark:text-whiteText`}>
                  {title}
                </h2>
                <button
                  className={styles.svg_wrapper}
                  onClick={() => deleteFunc(_id)}
                >
                  <HiOutlineTrash className="md:h-6 md:w-6" />
                </button>

                <p
                  className={`${styles.recipe_description} dark:text-whiteText`}
                >
                  {description}
                </p>
              </div>
              <div className={styles.card_bottom}>
                <p className={`${styles.recipe_time} dark:text-whiteText`}>
                  {time}
                </p>
                <AsimetricRoundedBtn
                  btnType="button"
                  text="See recipe"
                  style="flex justify-center items-center h-[27px] bg-accentMain border-transparent text-whiteText text-customRecipesTime hover:bg-overlayBackdrop transition"
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
