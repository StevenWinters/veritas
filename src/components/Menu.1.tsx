import { useStore } from "../context/StoreContext";
import { selectionData } from "../data/StoreData";

export const Menu = () => {
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
        <div className="flex flex--wrap justify--center align--center gap store__container selection">
          {selectionData.map((data) => {
            return <Selection key={data.id} {...data} />;
          })}
        </div>
        <div className="grid grid-s-1x2 grid--center gap store__container">
          <Filters />
          <Search />
        </div>
        <div className="store">
          {searchMenu.length !== 0 ? (
            <>
              <div className="flex justify--center align--center gap search__container">
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
