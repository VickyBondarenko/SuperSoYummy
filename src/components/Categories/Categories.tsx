import React from "react";
import { CategoriesNav } from "./CategoriesNav";
import { CategoriesGallery } from "./CategoriesGallery";

export const Categories: React.FC = () => {
  return (
    <section className="pt-[50px] md:pt-[72px] pb-[100px] md:pb-[200px] h-full px-4 md:px-8 xl:px-[100px]">
      <h1 className="font-main font-semibold text-mainText dark:text-whiteText text-customLg  md:text-customXl xl:text-customXxl mb-[50px] xl:mb-[100px]">
        Categories
      </h1>
      <CategoriesNav />
      <CategoriesGallery />
    </section>
  );
};