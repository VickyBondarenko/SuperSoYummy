import React, { useState } from "react";
import { useAppSelector } from "../hooks/reduxHooks";
import {
  selectSearchRecipes,
  selectIsLoading,
} from "../redux/searchSlice/searchSelector";
import { PageTitle } from "../components/PageTitle/PageTitle";
import { SearchForm } from "../components/Search/SearchForm/SearchForm";
import { SearchDropdown } from "../components/Search/SearchDropdown/SearchDropdown";
import { RecipeCard } from "../components/RecipeCard/RecipeCard";
import { Link } from "react-router-dom";

import { Loader } from "../components/Preloader/Loader";

export const SearchPage: React.FC = () => {
  const [currentPage, _] = useState<number>(1);
  const searchRecipes = useAppSelector(selectSearchRecipes);
  const isLoading = useAppSelector(selectIsLoading);

  return (
    <section className="px-4 pb-[100px] pt-[50px] md:px-8 md:pb-[200px] xl:px-[99px]">
      <PageTitle title="Search" />
      <SearchForm page={currentPage} />
      <SearchDropdown />
      {isLoading ? (
        <Loader />
      ) : (
        <ul className="w-full flex justify-center items-center flex-wrap gap-7 md:gap-8 xl:gap-x-4 xl:gap-y-[78px]">
          {searchRecipes.length !== 0 &&
            searchRecipes.map((item) => (
              <Link
                to="/recipe"
                key={item._id}
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
      )}
    </section>
  );
};
