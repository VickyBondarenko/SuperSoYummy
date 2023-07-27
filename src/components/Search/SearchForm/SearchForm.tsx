import React, { useState } from "react";

import { Notify } from "notiflix";
import { AsimetricRoundedBtn } from "../../Buttons/AsimetricRoundedBtn";

export const SearchForm: React.FC = () => {
  const [searchInput, setSearchInput] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const { value } = form.elements[0] as HTMLInputElement;
    const trimmedValue = value.trim();
    if (trimmedValue === "") {
      Notify.warning("Enter recipe title to search", {
        position: "left-top",
      });
      return;
    }
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
