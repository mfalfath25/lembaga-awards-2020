import React, { useContext, createContext, useReducer } from "react";
import reducer from "./reducer";

//initial state
const initialState = {
  nim: "",
  nama: "",
  prodi: "",
  isLogged: false,
  token: "",
  pilihan: {
    terinovatif: 0,
    terinspiratif: 0,
    terkreatif: 0,
    lsoFavorit: 0,
    loFavorit: 0,
    ketuaHits: 0,
  },
};

export const AuthContext = createContext(initialState);
const { Provider } = AuthContext;

//provider
export const AuthProvider = (props) => {
  const store = useReducer(reducer, initialState);
  return <Provider value={store}>{props.children}</Provider>;
};
