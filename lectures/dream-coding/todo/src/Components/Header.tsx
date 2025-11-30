import React from "react";

import type { Filter } from "../types/todo";

export default function Header({
  setFilter,
}: {
  setFilter: React.Dispatch<React.SetStateAction<Filter>>;
}) {
  const filters: Filter[] = ["all", "active", "completed"];

  const handleFilterBtn = (selectedFilter: Filter) => setFilter(selectedFilter);

  return (
    <div className="flex justify-between">
      <div>테마</div>
      <div className="flex gap-x-2">
        {filters.map((el) => (
          <button key={el} onClick={() => handleFilterBtn(el)}>
            {el}
          </button>
        ))}
      </div>
    </div>
  );
}
