import { BsSearch } from "react-icons/bs";
import { useStore } from "../context/StoreContext";

const Search = () => {
  const { searchValue, handleSetSearchValue, handleStoreSearch } = useStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleStoreSearch(searchValue);
  };
  return (
    <form
      className="flex align--center input__holder"
      onSubmit={(e) => handleSubmit(e)}
    >
      <input
        type="text"
        className="input"
        value={searchValue}
        onChange={(e) => handleSetSearchValue(e.currentTarget.value)}
      />
      <span className="icon" onClick={handleSubmit}>
        <BsSearch size={15} />
      </span>
    </form>
  );
};

export default Search;
