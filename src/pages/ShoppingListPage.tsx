import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";

import { PageTitle } from "../components/PageTitle/PageTitle";
import { Loader } from "../components/Preloader/Loader";
import {
  selectIsLoading,
  selectShoppingList,
  selectTotalPages,
} from "../redux/shoppingListSlice/shoppingListSelect";
import { SearchNothingFound } from "../components/Search/SearchNothingFound/SearchNothingFound";
import {
  fetchAllShoppingIngredients,
  fetchDeleteShoppingIngredient,
} from "../redux/shoppingListSlice/shoppingListThunk";
import { ShoppingList } from "../components/ShoppingList/ShoppingList";

export const ShoppingListPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [toggleEffect, setToggleEffect] = useState<boolean>(false);
  const isLoading = useAppSelector(selectIsLoading);
  const shoppingList = useAppSelector(selectShoppingList);
  const dispatch = useAppDispatch();

  const totalPages = useAppSelector(selectTotalPages);

  const handleDeleteRecipe = async (_id: string): Promise<void> => {
    await dispatch(fetchDeleteShoppingIngredient(_id));
    if (shoppingList.length === 1 && currentPage !== 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
    setToggleEffect(!toggleEffect);
  };

  useEffect(() => {
    dispatch(fetchAllShoppingIngredients({ page: currentPage, limit: 8 }));
  }, [currentPage, toggleEffect]);

  const onChangePage = (curPage: number) => {
    const element = document.getElementById("ahcnor1");
    if (element) {
      element.scrollIntoView({ block: "start", behavior: "smooth" });
    }
    setCurrentPage(curPage);
  };

  return (
    shoppingList && (
      <section className="px-4 pb-[100px] pt-[50px] md:px-8 md:pb-[200px] xl:px-[99px]">
        <PageTitle title="Shopping list" />
        {isLoading && <Loader />}
        {!isLoading && shoppingList.length === 0 && (
          <SearchNothingFound text="You have not add any ingredient to shopping list yet..." />
        )}
        {!isLoading && shoppingList.length !== 0 && (
          <ShoppingList
            shoppingListData={shoppingList}
            deleteFunc={handleDeleteRecipe}
            totalPages={totalPages}
            currentPage={currentPage}
            onChangePage={onChangePage}
          />
        )}
      </section>
    )
  );
};
