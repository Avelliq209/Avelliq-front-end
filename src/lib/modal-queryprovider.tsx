"use client"
import { createContext, useContext } from "react";

interface ModalQueryProviderProps {
  setModal: (val: boolean) => void,
  contentModal: (val: React.ReactNode) => void,
  children: React.ReactNode
}

export interface QueryContextType {
  setModal: (val: boolean) => void,
  contentModal: (val: React.ReactNode) => void,
}

export const QueryContext = createContext<QueryContextType | undefined>(undefined)


const ModalQueryProvider = ({setModal, contentModal, children}: ModalQueryProviderProps) => {
  return (
    <QueryContext.Provider value={{ setModal, contentModal}}>
      {children}
    </QueryContext.Provider>
  )
}

export const useQuery = () => {
  const context = useContext(QueryContext);
  if (context === undefined) {
    throw new Error('useQuery must be used within a QueryProvider');
  }
  return context;
}

export default ModalQueryProvider