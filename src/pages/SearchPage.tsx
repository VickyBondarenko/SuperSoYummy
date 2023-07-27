import React from "react";
import { PageTitle } from "../components/PageTitle/PageTitle";
import { SearchForm } from "../components/Search/SearchForm/SearchForm";
import { DropdownFilter } from "../components/Search/SearchDropdown/SearchDropdown";

export const SearchPage: React.FC = () => {
  return (
    <section className="px-4 pb-[100px] pt-[50px]">
      <PageTitle title="Search" />
      <SearchForm />
      <DropdownFilter />
    </section>
  );
};
