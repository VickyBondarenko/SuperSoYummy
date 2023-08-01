import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import {
  selectTotalPages,
  selectSearchRecipes,
  selectIsLoading,
  selectSearchQuery,
  selectSearchParam,
  selectSearchError,
} from "../redux/searchSlice/searchSelector";
import { fetchSearchRecipes } from "../redux/searchSlice/searchThunk";
import { resetSearchPage } from "../redux/searchSlice/searchSlice";

import { Loader } from "../components/Preloader/Loader";
import { PageTitle } from "../components/PageTitle/PageTitle";
import { SearchForm } from "../components/Search/SearchForm/SearchForm";
import { SearchDropdown } from "../components/Search/SearchDropdown/SearchDropdown";
import { SearchGallery } from "../components/Search/SearchGallery/SearchGallery";
import { Pagination } from "../components/Pagination/Pagination";
import { SearchNothingFound } from "../components/Search/SearchNothingFound/SearchNothingFound";

export const SearchPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const searchRecipes = useAppSelector(selectSearchRecipes);
  const totalPages = useAppSelector(selectTotalPages);
  const isLoading = useAppSelector(selectIsLoading);
  const searchQuery = useAppSelector(selectSearchQuery);
  const searchParam = useAppSelector(selectSearchParam);
  const searchError = useAppSelector(selectSearchError);
  const dispatch = useAppDispatch();
  const isDesktop = useMediaQuery({ query: "(min-width: 1440px)" });
  const limit = isDesktop ? 12 : 6;

  const handleReset = () => {
    dispatch(resetSearchPage(null));
  };

  useEffect(() => {
    return () => {
      handleReset();
    };
  }, []);
  useEffect(() => {
    if (searchQuery !== "") {
      const request = {
        page: currentPage,
        limit,
        searchParam,
        searchQuery,
      };
      dispatch(fetchSearchRecipes(request));
    }
  }, [currentPage]);

  const onChangePage = (curPage: number) => {
    const element = document.getElementById("ahcnor1");
    if (element) {
      element.scrollIntoView({ block: "start", behavior: "smooth" });
    }
    setCurrentPage(curPage);
  };

  return (
    <section className="px-4 pb-[100px] pt-[50px] md:px-8 md:pb-[200px] xl:px-[99px]">
      <PageTitle title="Search" />
      <SearchForm page={currentPage} limit={limit} />
      <SearchDropdown />
      {isLoading && <Loader />}
      {!isLoading && searchError === "Not found" && <SearchNothingFound />}
      {!isLoading &&
        searchError !== "Not found" &&
        searchRecipes.length > 0 && (
          <>
            <SearchGallery
              searchRecipes={searchRecipes}
              handleReset={handleReset}
            />
            {totalPages > 1 && (
              <Pagination
                currentpage={currentPage}
                onChangePage={onChangePage}
                totalPages={totalPages}
              />
            )}
          </>
        )}
      {!isLoading && searchError === null && searchRecipes.length === 0 && (
        <p className="text-black text-opacity-50 text-[14px] tracking-[-0.28px] font-medium md:text-[24px] md:tracking-[-0.48px] text-center">
          Lets find something tasty
        </p>
      )}
    </section>
  );
};
