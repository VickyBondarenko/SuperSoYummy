import React, { useEffect, useState } from "react";
import style from "./Pagination.module.css";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

interface IPaginationProps {
  totalPages: number;
  currentpage: number;
  onChangePage: (page: number) => void;
}

export const Pagination: React.FC<IPaginationProps> = ({
  onChangePage,
  totalPages,
  currentpage,
}) => {
  const [isActive, setIsActive] = useState(currentpage);
  const pages: number[] = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  useEffect(() => {
    setIsActive(currentpage);
  }, [currentpage]);

  const onClick = (e: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {
    if (e.target instanceof HTMLElement && e.target.innerText !== undefined) {
      const text: string = e.target.innerText;

      if (text === "...") {
        // Ничего не делать для "..."
        return;
      } else {
        // Выполнить onChangePage для чисел
        setIsActive(Number(text));
        onChangePage(Number(text));
      }
    }
  };

  function handlePaginationDisplay() {
    const pageNeighboursLeft = [currentpage - 2, currentpage - 1];
    const pageNeighboursRight = [currentpage + 1, currentpage + 2];

    let rangeToDisplay: Array<string | number> = [];
    if (totalPages > 8) {
      if (currentpage < 6) {
        rangeToDisplay = [1, 2, 3, 4, 5, 6, "...", totalPages];
      }
      if (currentpage >= 6) {
        rangeToDisplay = [
          1,
          "...",
          ...pageNeighboursLeft,
          currentpage,
          ...pageNeighboursRight,
          "...",
          totalPages,
        ];
      }
      if (currentpage > totalPages - 5) {
        rangeToDisplay = [
          1,
          "...",
          totalPages - 5,
          totalPages - 4,
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages,
        ];
      }
    } else {
      rangeToDisplay = pages;
    }
    return rangeToDisplay;
  }

  return (
    <div className={style.pagination}>
      <button
        className={style.arrowBtn}
        disabled={currentpage === 1}
        onClick={() => onChangePage(currentpage - 1)}
      >
        <AiOutlineLeft />
      </button>
      {handlePaginationDisplay().map((page, index) => (
        <p
          className={`${style.pageDigit} ${
            isActive === page ? style.active : ""
          }`}
          key={index}
          data-currentpage={currentpage}
          onClick={(e: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {
            // const target = e.target as HTMLParagraphElement;
            // onChangePage(Number(target.innerText));
            onClick(e as React.MouseEvent<HTMLParagraphElement, MouseEvent>);
          }}
        >
          {page}
        </p>
      ))}
      <button
        className={style.arrowBtn}
        disabled={currentpage === totalPages}
        onClick={() => onChangePage(currentpage + 1)}
      >
        <AiOutlineRight />
      </button>
    </div>
  );
};
