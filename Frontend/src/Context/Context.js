import { createContext, useContext, useState } from "react";

// Tạo context
const FilterContext = createContext();

// Provider để bao bọc các component con
export const FilterProvider = ({ children }) => {


    return (
        <FilterContext.Provider value={{ contextValue }}>
            {children}
        </FilterContext.Provider>
    );
};

// Custom hook để lấy context
export const useFilter = () => useContext(FilterContext);
