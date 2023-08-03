import React from "react";
import { PageTitle } from "../components/PageTitle/PageTitle";
import { AddRecipe } from "../components/AddRecipe/AddRecipe";

export const AddRecipePage: React.FC = () => {
  return (
    <section className="px-4 pb-[100px] pt-3">
      <PageTitle title="Add recipe" />
      <div>
        <AddRecipe />
      </div>
      <div></div>
    </section>
  );
};
