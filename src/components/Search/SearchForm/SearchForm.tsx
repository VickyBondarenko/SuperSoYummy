import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { fetchSearchRecipes } from "../../../redux/searchSlice/searchThunk";
import { updateSearchQuery } from "../../../redux/searchSlice/searchSlice";
import {
  selectSearchParam,
  selectSearchQuery,
} from "../../../redux/searchSlice/searchSelector";

import { Notify } from "notiflix";
import { ReactComponent as CrossSvg } from "../../../assets/cross.svg";
import { AsimetricRoundedBtn } from "../../Buttons/AsimetricRoundedBtn";

interface ISearchFormProp {
  page: number;
  limit: number;
}

export const SearchForm: React.FC<ISearchFormProp> = ({ page, limit }) => {
  const searchQuery = useAppSelector(selectSearchQuery);
  const [searchInput, setSearchInput] = useState<string>(searchQuery);
  const searchParam = useAppSelector(selectSearchParam);
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const { value } = form.elements[0] as HTMLInputElement;
    const inputValue = value.trim();
    if (inputValue === "") {
      Notify.warning("Enter recipe title to search", {
        position: "left-top",
      });
      return;
    }
    const request = {
      page,
      limit,
      searchParam,
      searchQuery: inputValue,
    };
    dispatch(updateSearchQuery(inputValue));
    dispatch(fetchSearchRecipes(request));
  };

  return (
    <form id="ahcnor1" className="search_form mb-10" onSubmit={handleSubmit}>
      <input
        className="search_form_input"
        type="text"
        placeholder="Ex: Beef"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      {searchInput !== "" && (
        <button
          type="reset"
          onClick={() => setSearchInput("")}
          className="absolute top-1/2 -translate-y-1/2 right-1/3 -translate-x-1/2  md:right-1/2 md:translate-x-full xl:right-1/3 xl:translate-x-1"
        >
          <CrossSvg className="w-5 h-5 stroke-gray-400 hover:stroke-secondaryText dark:hover:stroke-whiteText transition" />
        </button>
      )}
      <AsimetricRoundedBtn
        text="Search"
        style="search_form_btn bg-accentMain hover:bg-overlayBackdrop transition border-2 border-transparent hover:border-overlayBackdrop"
        btnType="submit"
      />
    </form>
  );
};
