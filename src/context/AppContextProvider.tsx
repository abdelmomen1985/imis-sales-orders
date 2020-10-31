import React, { createContext, ReactNode, useReducer } from "react";
import { CustomerType, PriceOfferType, SalesOrderType } from "../types";
import { ACTION_TYPES, AppReducer, getStorageSingleItem } from "./AppReducer";

export type StateType = {
  lang: "ar" | "en";
  contextCustomer: CustomerType;
  salesOrder: SalesOrderType;
  priceOffer: PriceOfferType;
  userLoggedIn: boolean;
  setContextCustomer: (customer: CustomerType) => void;
  setSalesOrder: (salesOrder: SalesOrderType) => void;
  setPriceOffer: (priceOffer: PriceOfferType) => void;
  setLoggedInUser: (user: any) => void;
};

interface AppContextProviderProps {
  children: ReactNode;
}

let storageCustomer = getStorageSingleItem("CONTEXT_CUSTOMER") as CustomerType;
let salesOrder = getStorageSingleItem("SALES_ORDER") as SalesOrderType;
let priceOffer = getStorageSingleItem("PRICE_OFFER") as PriceOfferType;
let userLoggedIn = getStorageSingleItem("IS_USER_LOGGED_IN") ? true : false;

const initialState = {
  lang: "ar",
  contextCustomer: storageCustomer,
  userLoggedIn,
  salesOrder,
  priceOffer,
} as StateType;

export const AppContext = createContext<StateType>(initialState);

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const setContextCustomer = (customer: CustomerType) => {
    dispatch({
      type: ACTION_TYPES.SET_CUSTOMER,
      payload: customer,
    });
  };

  const setLoggedInUser = (user: any) => {
    dispatch({
      type: ACTION_TYPES.SET_USER_LOGGED_IN,
      payload: user ? true : false,
    });
  };

  const setSalesOrder = (salesOrder: SalesOrderType) => {
    dispatch({
      type: ACTION_TYPES.SET_SALES_ORDER,
      payload: salesOrder,
    });
  };

  const setPriceOffer = (priceOffer: PriceOfferType) => {
    dispatch({
      type: ACTION_TYPES.SET_PRICE_OFFER,
      payload: priceOffer,
    });
  };

  const contextValues: StateType = {
    ...state,
    setContextCustomer,
    setSalesOrder,
    setLoggedInUser,
    setPriceOffer,
  };
  return (
    <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>
  );
};
