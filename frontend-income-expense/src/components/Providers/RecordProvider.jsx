import { useState, createContext } from "react";

export const RecordModalContext = createContext();

const RecordProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <RecordModalContext.Provider value={{ showModal, setShowModal }}>
      {children}
    </RecordModalContext.Provider>
  );
};
export default RecordProvider;
