import * as actions from "./action";

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

//context reducer
export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case actions.SET_LOGIN:
      return {
        ...state,
        nim: payload.nim,
        nama: payload.nama,
        prodi: payload.prodi,
        isLogged: payload.isLogged,
        token: payload.token,
      };
    case actions.SET_CHOICE:
      return {
        ...state,
        pilihan: {
          ...state.pilihan,
          [payload.kategori]: payload.value,
        },
      };
    case actions.SET_LOGOUT:
      return initialState;
    default:
      return state;
  }
}
