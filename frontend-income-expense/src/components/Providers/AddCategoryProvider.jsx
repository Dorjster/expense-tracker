import { useState, createContext } from "react";

export const AddCategoryContext = createContext();

const AddCategoryProvider = ({ children }) => {
  const [showCategory, setShowCategory] = useState(true);
  return (
    <AddCategoryContext.Provider value={{ showCategory, setShowCategory }}>
      {children}
    </AddCategoryContext.Provider>
  );
};
export default AddCategoryProvider;
