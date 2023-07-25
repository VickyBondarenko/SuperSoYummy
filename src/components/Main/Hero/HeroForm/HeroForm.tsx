import React, { useState } from "react";
import { AsimetricRoundedBtn } from "../../../Buttons/AsimetricRoundedBtn";
import styles from "./HeroFrom.module.css";

export const HeroForm: React.FC = () => {
  const [heroInput, setHeroInput] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const { value } = form.elements[0] as HTMLInputElement;
    console.log(value);
    setHeroInput("");
  };

  return (
    <form className={styles.hero_form} onSubmit={handleSubmit}>
      <input
        className={styles.hero_form_input}
        type="text"
        placeholder="Ex: Beef"
        value={heroInput}
        onChange={(e) => setHeroInput(e.target.value)}
      />
      <AsimetricRoundedBtn text={"Search"} style={styles.hero_form_btn} />
    </form>
  );
};
