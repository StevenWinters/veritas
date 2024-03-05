import { ReactNode, createContext, useContext, useState } from "react";
import { storeData } from "../data/storeData";

interface Props {
  children: ReactNode;
}

export interface ModalData {
  id: number;
  image: string;
  name: string;
  price: number;
  description: string;
}

interface StoreData {
  id: number;
  sectionId: string;
  section: string;
  items: ModalData[];
}

interface StoreContext {
  storeFilter: StoreData[];
  searchValue: string;
  searchMenu: ModalData[][];
  handleStoreFilter: (category: string) => void;
  handleSetSearchValue: (currentValue: string) => void;
  handleStoreSearch: (searchValue: string) => void;
  handleGetTotalResults: () => number;
}

const StoreContext = createContext({} as StoreContext);

export function useStore() {
  return useContext(StoreContext);
}

export function StoreContextProvider({ children }: Props) {
  const [storeFilter, setStoreFilter] = useState<StoreData[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [searchMenu, setSearchMenu] = useState<ModalData[][]>([]);

  const handleStoreFilter = (category: string) =>
    setStoreFilter(
      storeData.filter(
        (data) => data.section === category || (category === "All" && data)
      )
    );

  const handleSetSearchValue = (currentValue: string) =>
    setSearchValue(currentValue);

  const handleStoreSearch = (searchValue: string) => {
    if (!searchValue) return setSearchMenu([]);

    setSearchMenu(
      storeData.map((category) =>
        category.items
          .flat()
          .filter((items) =>
            items.name.toLowerCase().includes(searchValue.toLowerCase())
          )
      )
    );
  };
  const handleGetTotalResults = () => {
    return searchMenu.reduce((results, items) => items.length + results, 0);
  };

  return (
    <StoreContext.Provider
      value={{
        storeFilter,
        searchValue,
        searchMenu,
        handleStoreFilter,
        handleSetSearchValue,
        handleStoreSearch,
        handleGetTotalResults,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}
