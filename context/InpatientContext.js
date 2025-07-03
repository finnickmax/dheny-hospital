import { createContext, useState } from 'react';

export const InpatientContext = createContext();

export const InpatientProvider = ({ children }) => {
  const [inpatients, setInpatients] = useState([]);

  const addInpatient = (data) => {
    setInpatients([...inpatients, { ...data, id: Date.now() }]);
  };

  return (
    <InpatientContext.Provider value={{ inpatients, addInpatient }}>
      {children}
    </InpatientContext.Provider>
  );
};
