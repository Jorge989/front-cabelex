import React, { createContext, useContext, useState } from "react";
interface IFilialUP {
  nome: string;
  qtd_employees: number;

  id: number;
  setNome: React.Dispatch<React.SetStateAction<string>>;
  setQtd_employees: React.Dispatch<React.SetStateAction<number>>;

  setId: React.Dispatch<React.SetStateAction<number>>;
}

const FilialContext = createContext({});
export default function CupomProvider({ children }: any) {
  const [nome, setNome] = useState("");
  const [qtd_employees, setQtd_employees] = useState(0);

  const [id, setId] = useState(0);
  return (
    <FilialContext.Provider
      value={{
        nome,
        setNome,
        qtd_employees,
        setQtd_employees,
        id,
        setId,
      }}
    >
      {children}
    </FilialContext.Provider>
  );
}
export function useFilial() {
  const context = useContext(FilialContext) as IFilialUP;
  const { nome, setNome } = context;
  const { qtd_employees, setQtd_employees } = context;

  const { id, setId } = context;

  if (!context) {
    throw new Error("useCupom must be used whitin a CupomProvider");
  }

  return context;
}
