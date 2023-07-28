import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { fetchSearchRecipes } from "../../../redux/searchSlice/searchThunk";
import { selectSearchParam } from "../../../redux/searchSlice/searchSelector";

import { Notify } from "notiflix";
import { AsimetricRoundedBtn } from "../../Buttons/AsimetricRoundedBtn";

interface ISearchFormProp {
  page: number;
}

export const SearchForm: React.FC<ISearchFormProp> = ({ page }) => {
  const [searchInput, setSearchInput] = useState<string>("");
  const searchParam = useAppSelector(selectSearchParam);
  const dispatch = useAppDispatch();

  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });
  const limit = isDesktop ? 12 : 6;
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const { value } = form.elements[0] as HTMLInputElement;
    const searchQuery = value.trim();
    if (searchQuery === "") {
      Notify.warning("Enter recipe title to search", {
        position: "left-top",
      });
      return;
    }
    const request = {
      page,
      limit,
      searchParam,
      searchQuery,
    };
    dispatch(fetchSearchRecipes(request));
    setSearchInput("");
  };

  return (
    <form className="search_form mb-10" onSubmit={handleSubmit}>
      <input
        className="search_form_input"
        type="text"
        placeholder="Ex: Beef"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />

      <AsimetricRoundedBtn
        text="Search"
        style="search_form_btn bg-accentMain hover:bg-overlayBackdrop transition border-2 border-transparent hover:border-overlayBackdrop"
        btnType="submit"
      />
    </form>
  );
};
