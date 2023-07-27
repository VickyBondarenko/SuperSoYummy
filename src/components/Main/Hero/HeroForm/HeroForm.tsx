import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { AsimetricRoundedBtn } from "../../../Buttons/AsimetricRoundedBtn";
import { Notify } from "notiflix";

export const HeroForm: React.FC = () => {
  const [heroInput, setHeroInput] = useState<string>("");
  const navigate = useNavigate();

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
    navigate("/search");
    setHeroInput("");
  };

  return (
    <form className="search_form order-2 md:order-none" onSubmit={handleSubmit}>
      <input
        className="search_form_input"
        type="text"
        placeholder="Ex: Beef"
        value={heroInput}
        onChange={(e) => setHeroInput(e.target.value)}
      />

      <AsimetricRoundedBtn
        text={"Search"}
        style="search_form_btn border-[1px] border-secondaryText bg-accentDark dark:bg-accentMain hover:bg-accentHalfDark dark:hover:bg-overlayBackdrop transition"
        btnType={"submit"}
      />
    </form>
  );
};
