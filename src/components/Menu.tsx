import { useStore } from "../context/StoreContext";
import { selectionData, storeData } from "../data/storeData";
import Filters from "./Filters";
import Search from "./Search";
import Selection from "./Selection";
import StoreItem from "./StoreItem";

const Menu = () => {
  const {
    storeFilter,
    searchMenu,
    handleSetSearchValue,
    handleStoreSearch,
    handleGetTotalResults,
  } = useStore();

  const handleClearSearch = () => {
    handleSetSearchValue("");
    handleStoreSearch("");
  };

  return (
    <section className="block block--dark">
      <div className="container">
        <div className="flex flex--wrap justify--center align--center gap--lg selection">
          {selectionData.map((data) => (
            <Selection key={data.id} {...data} />
          ))}
        </div>
        <div className="grid grid--1x2 grid--center align--center gap store__container">
          <Filters />
          <Search />
        </div>
        <div>
          {searchMenu.length !== 0 ? (
            <>
              <div className="grid grid--1x2 align--center gap--lg result">
                {handleGetTotalResults() === 0 ? (
                  <h2>No items found.</h2>
                ) : (
                  <h2>
                    {handleGetTotalResults() === 1 ? "Result" : "Results"}:{" "}
                    {handleGetTotalResults()}
                  </h2>
                )}
                <button
                  className="btn btn--primary"
                  onClick={() => handleClearSearch()}
                >
                  Clear Search
                </button>
              </div>
              <div className="flex flex--wrap justify--center align--center gap--lg">
                {searchMenu.map((category) =>
                  category.map((item) => <StoreItem key={item.id} {...item} />)
                )}
              </div>
            </>
          ) : (
            (storeFilter.length !== 0 ? storeFilter : storeData).map((data) => (
              <div key={data.id} className="store__section" id={data.sectionId}>
                <h2>{data.section}</h2>
                <div className="flex flex--wrap justify--center align--center gap--lg">
                  {data.items.map((item) => (
                    <StoreItem key={item.id} {...item} />
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Menu;
