"use client";
import { createContext, useContext, useState, ReactNode } from 'react';

interface PessoasContextType {
  numeroDePessoas: number;
  setNumeroDePessoas: (numero: number) => void;
  listaProdutos: Record<string, any>
}

const PessoasContext = createContext<PessoasContextType | undefined>(undefined);

export const PessoasProvider = ({ children }: { children: ReactNode }) => {
  const [numeroDePessoas, setNumeroDePessoas] = useState(1);
  const [listaProdutos, setListaProdutos] = useState<Record<string, any>>({});

  return (
    <PessoasContext.Provider value={{ numeroDePessoas, setNumeroDePessoas,listaProdutos }}>
      {children}
    </PessoasContext.Provider>
  );
};

export const usePessoas = () => {
  const context = useContext(PessoasContext);
  if (!context) {
    throw new Error('usePessoas deve ser usado dentro de PessoasProvider');
  }
  return context;
};
