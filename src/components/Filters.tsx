import { useState } from "react";
import { filters } from "../data/filtersData";
import { useStore } from "../context/StoreContext";

const Filters = () => {
  const [isActive, setActive] = useState("All");
  const { handleStoreFilter } = useStore();

  const handleFilter = (category: string) => {
    setActive(category);
    handleStoreFilter(category);
  };
  return (
    <div className="flex flex--wrap justify--center gap--sm">
      {filters.map((filter) => (
        <button
          key={filter.id}
          className={`btn btn--filter btn--accent ${
            isActive === filter.name && "active"
          }`}
          onClick={() => handleFilter(filter.name)}
        >
          {filter.name}
        </button>
      ))}
    </div>
  );
};

export default Filters;
