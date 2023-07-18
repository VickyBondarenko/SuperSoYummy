import React from "react";

const categories: string[] = [
  "Beef",
  "Breakfast",
  "Chicken",
  "Dessert",
  "Goat",
  "Lamb",
  "Miscellaneous",
  "Pasta",
  "Pork",
  "Seafood",
  "Side",
  "Starter",
  "Vegan",
  "Vegetarian",
];

export const CategoriesNav: React.FC = () => {
  return (
    <div className="w-full h-[55px] overflow-hidden hover:overflow-auto border-b-4 hover:border-b-0 scrollbar-track-listUnderline border-listUnderline scrollbar scrollbar-thumb-accentMain scrollbar-medium mb-8">
      <ul className="flex flex-row gap-[28px] md:gap-[55px] p-2">
        {categories.map((item: string, index: number) => (
          <li
            key={index}
            className="font-main text-listUnderline text-customXxs md:text-[18px]"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
