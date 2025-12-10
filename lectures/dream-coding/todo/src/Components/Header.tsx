import React from "react";

import type { Filter } from "../types/todo";
import useTheme from "../hooks/useTheme";

import styles from "./todo.module.css";

export default function Header({
  setFilter,
  filter,
}: {
  setFilter: React.Dispatch<React.SetStateAction<Filter>>;
  filter: Filter;
}) {
  const { theme, setTheme } = useTheme();
  const filters: Filter[] = ["all", "active", "completed"];

  const handleFilterBtn = (selectedFilter: Filter) => setFilter(selectedFilter);

  return (
    <div className={styles.header}>
      <div>
        <button
          onClick={() => {
            if (theme === "dark") {
              setTheme("light");
            } else {
              setTheme("dark");
            }
          }}
        >
          {theme}
        </button>
      </div>
      <div className={styles.filterBtnContainer}>
        {filters.map((el) => (
          <button
            key={el}
            onClick={() => handleFilterBtn(el)}
            className={`${styles.filterBtn} ${
              filter === el ? styles.active : ""
            }`}
          >
            {el}
          </button>
        ))}
      </div>
    </div>
  );
}
