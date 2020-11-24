
import { StateType } from "./AppContextProvider";

export const setStorageItems = (items: any[]) => {
  localStorage.setItem("cart", JSON.stringify(items.length > 0 ? items : []));
};

export const setStorageSingleItem = (name: string, item: object) => {
  localStorage.setItem(name, JSON.stringify(item));
};

export const getStorageSingleItem = (name: string): object | undefined => {
  if (localStorage.getItem(name))
    return JSON.parse(localStorage.getItem(name)!);
};

export const ACTION_TYPES = {
  CHANGE_CURRENT_LANG: "CHANGE_CURRENT_LANG",
  SET_USER_LOGGED_IN: "SET_USER_LOGGED_IN",
  SET_USER_LOGGED_OUT: "SET_USER_LOGGED_OUT",
  SET_CUSTOMER: "SET_CUSTOMER",
  SET_SALES_ORDER: "SET_SALES_ORDER",
  SET_PRICE_OFFER: "SET_PRICE_OFFER",
  SET_SHOW_SIDER: "SET_SHOW_SIDER"
};

type Action = {
  type: string;
  payload: any;
};

export const AppReducer = (state: StateType, action: Action) => {
  switch (action.type) {
    case ACTION_TYPES.CHANGE_CURRENT_LANG:
      return { ...state };
    case ACTION_TYPES.SET_CUSTOMER: {
      console.log(
        "%c Mo2Log action.payload ",
        "background: #bada55",
        action.payload
      );
      setStorageSingleItem("CONTEXT_CUSTOMER", action.payload);
      return { ...state, contextCustomer: action.payload };
    }
    case ACTION_TYPES.SET_SALES_ORDER: {
      setStorageSingleItem("SALES_ORDER", action.payload);
      return { ...state, salesOrder: action.payload };
    }
    case ACTION_TYPES.SET_USER_LOGGED_IN: {
      setStorageSingleItem("IS_USER_LOGGED_IN", action.payload);
      return { ...state, userLoggedIn: action.payload } as StateType;
    }
    case ACTION_TYPES.SET_PRICE_OFFER: {
      setStorageSingleItem("PRICE_OFFER", action.payload);
      return { ...state, priceOffer: action.payload } as StateType;
    }
    case ACTION_TYPES.SET_SHOW_SIDER: {
      return { ...state, showSider: action.payload } as StateType;
    }
    default:
      return state;
  }
};
