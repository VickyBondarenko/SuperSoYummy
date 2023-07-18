import React, { useState } from "react";
import { RecipeCard } from "../RecipeCard/RecipeCard";
import { IRecipeInfo } from "../RecipeCard/RecipeCard";

interface CategorieResponse {
  _id: string;
  recipes: IRecipeInfo[];
  points: number;
  category: string;
}

const response: CategorieResponse[] = [
  {
    _id: "647c86459fec93f88e9aaa28",
    recipes: [
      {
        _id: "640cd5ac2d9fecf12e8898f5",
        title: "Apam balik",
        preview:
          "https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678561435/hzprrtagxfjzzxmitb96.jpg",
        thumb:
          "https://www.themealdb.com/images/media/meals/adxcbq1619787919.jpg",
        description:
          "A popular Malaysian dessert made with a crispy and fluffy pancake-like batter, filled with sweet roasted peanuts, sugar, and creamed corn. Served hot, folded in half and drizzled with sweet syrup or condensed milk.",
        time: "10",
      },
      {
        _id: "640cd5ac2d9fecf12e8897fc",
        title: "Spaghetti Bolognese",
        preview:
          "https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560401/huqdxgwkvbhsfjqtexsm.jpg",
        thumb:
          "https://www.themealdb.com/images/media/meals/sutysw1468247559.jpg",
        description: "An Italian pasta dish",
        time: "45",
      },
      {
        _id: "640cd5ac2d9fecf12e889812",
        title: "Kentucky Fried Chicken",
        preview:
          "https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560404/h3dgtiachtzkb08lrwql.jpg",
        thumb:
          "https://www.themealdb.com/images/media/meals/xqusqy1487348868.jpg",
        description:
          "A famous American fast food chain known for its crispy, seasoned fried chicken.",
        time: "60",
      },
      {
        _id: "640cd5ac2d9fecf12e88986c",
        title: "Beef Bourguignon",
        preview:
          "https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560625/trpkmadthcpc523hd1un.jpg",
        thumb:
          "https://www.themealdb.com/images/media/meals/vtqxtu1511784197.jpg",
        description:
          "A classic French beef stew made with red wine, beef broth, bacon, and vegetables like carrots and onions. It is typically served with mashed potatoes or crusty bread.",
        time: "220",
      },
      {
        _id: "640cd5ac2d9fecf12e889811",
        title: "Beef Brisket Pot Roast",
        preview:
          "https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560404/z3m3bwmcufzil1zlw8u0.jpg",
        thumb:
          "https://www.themealdb.com/images/media/meals/ursuup1487348423.jpg",
        description:
          "A comforting American dish of beef brisket slow-cooked with root vegetables and herbs until tender and flavorful.",
        time: "300",
      },
      {
        _id: "640cd5ac2d9fecf12e889804",
        title: "Chicken Handi",
        preview:
          "https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560401/vlcqawcng5tkiglssrte.jpg",
        thumb:
          "https://www.themealdb.com/images/media/meals/wyxwsp1486979827.jpg",
        description:
          "A spicy and flavorful Indian curry made with bone-in chicken pieces.",
        time: "45",
      },
      {
        _id: "640cd5ac2d9fecf12e889813",
        title: "Thai Green Curry",
        preview:
          "https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560403/wawkuizenalv6chk9h1c.jpg",
        thumb:
          "https://www.themealdb.com/images/media/meals/sstssx1487349585.jpg",
        description:
          "A fragrant Thai dish made with coconut milk, green curry paste, and a mix of vegetables and meat or seafood.",
        time: "40",
      },
      {
        _id: "640cd5ac2d9fecf12e889819",
        title: "Katsu Chicken curry",
        preview:
          "https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560537/l3e2uc8plovj6wmc4stp.jpg",
        thumb:
          "https://www.themealdb.com/images/media/meals/vwrpps1503068729.jpg",
        description: "Japanese-style curry with breaded chicken",
        time: "45",
      },
    ],
    points: 122,
    category: "Beef",
  },
];

export const CategoriesGallery: React.FC = () => {
  const [recipes, _] = useState<IRecipeInfo[]>(response[0].recipes);

  return (
    <ul className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
      {recipes.map((item: IRecipeInfo) => (
        <RecipeCard
          key={item._id}
          _id={item._id}
          preview={item.preview}
          title={item.title}
          description={item.description}
          time={item.time}
        />
      ))}
    </ul>
  );
};
