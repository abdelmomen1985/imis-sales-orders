import React, { createContext, ReactNode, useReducer } from "react";
import { CustomerType, SalesOrderType } from "../types";
import { ACTION_TYPES, AppReducer, getStorageSingleItem } from "./AppReducer";

export type StateType = {
  lang: "ar" | "en";
  customerGUID: string;
  salesOrder: SalesOrderType;
  setContextCustomer: (customer: CustomerType) => void;
  setSalesOrder: (salesOrder: SalesOrderType) => void;
};

interface AppContextProviderProps {
  children: ReactNode;
}

let storageCustomer = getStorageSingleItem("CONTEXT_CUSTOMER") as CustomerType;
let salesOrder = getStorageSingleItem("SALES_ORDER") as SalesOrderType;
const initialState = {
  lang: "ar",
  customerGUID: storageCustomer?.GUID,
  salesOrder,
} as StateType;

export const AppContext = createContext<StateType>(initialState);

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const setContextCustomer = (customer: CustomerType) => {
    dispatch({
      type: ACTION_TYPES.SET_CUSTOMER_GUID,
      payload: customer,
    });
  };

  const setSalesOrder = (salesOrder: SalesOrderType) => {
    dispatch({
      type: ACTION_TYPES.SET_SALES_ORDER,
      payload: salesOrder,
    });
  };

  const contextValues: StateType = {
    ...state,
    setContextCustomer,
    setSalesOrder,
  };
  return (
    <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>
  );
};
