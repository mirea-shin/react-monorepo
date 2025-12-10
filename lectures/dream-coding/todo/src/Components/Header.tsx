import React from "react";

import type { Filter } from "../types/todo";
import useTheme from "../hooks/useTheme";

export default function Header({
  setFilter,
}: {
  setFilter: React.Dispatch<React.SetStateAction<Filter>>;
}) {
  const { theme, setTheme } = useTheme();
  const filters: Filter[] = ["all", "active", "completed"];

  const handleFilterBtn = (selectedFilter: Filter) => setFilter(selectedFilter);

  return (
    <div>
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
          테마 {theme}
        </button>
      </div>
      <div>
        {filters.map((el) => (
          <button key={el} onClick={() => handleFilterBtn(el)}>
            {el}
          </button>
        ))}
      </div>
    </div>
  );
}
