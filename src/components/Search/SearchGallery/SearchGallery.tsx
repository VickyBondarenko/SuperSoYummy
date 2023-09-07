import React from "react";
import { IRecipe } from "../../../types/RecipeType";
import { RecipeCard } from "../../RecipeCard/RecipeCard";
import { Link } from "react-router-dom";

interface ISearchGalleryProps {
  searchRecipes: IRecipe[];
  handleReset: () => void;
}

export const SearchGallery: React.FC<ISearchGalleryProps> = ({
  searchRecipes,
  handleReset,
}) => {
  return (
    <ul className="w-full flex justify-center items-center flex-wrap gap-7 md:gap-8 xl:gap-x-4 xl:gap-y-[78px]">
      {searchRecipes.map((item) => (
        <Link
          to={`/recipe/${item._id}`}
          key={item._id}
          onClick={handleReset}
          className="md:w-[calc((100%_-_(2_-_1)_*_32px)_/_2)] xl:w-[calc(25%_-_16px)]"
        >
          <RecipeCard
            _id={item._id}
            preview={item.preview}
            title={item.title}
            description={item.description}
            time={item.time}
          />
        </Link>
      ))}
    </ul>
  );
};
