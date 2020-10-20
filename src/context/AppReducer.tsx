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
  SET_CUSTOMER_GUID: "SET_CUSTOMER_GUID",
  SET_SALES_ORDER: "SET_SALES_ORDER",
};

type Action = {
  type: string;
  payload: any;
};

export const AppReducer = (state: StateType, action: Action) => {
  switch (action.type) {
    case ACTION_TYPES.CHANGE_CURRENT_LANG:
      return { ...state };
    case ACTION_TYPES.SET_CUSTOMER_GUID: {
      console.log(
        "%c Mo2Log action.payload ",
        "background: #bada55",
        action.payload
      );
      setStorageSingleItem("CONTEXT_CUSTOMER", action.payload);
      return { ...state, customerGUID: action.payload.customerGUID };
    }
    case ACTION_TYPES.SET_SALES_ORDER: {
      setStorageSingleItem("SALES_ORDER", action.payload);
      return { ...state, salesOrder: action.payload };
    }
    default:
      return state;
  }
};
