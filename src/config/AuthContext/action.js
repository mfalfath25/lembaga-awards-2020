export const SET_LOGIN = "SET_LOGIN";
export const SET_LOGOUT = "SET_LOGOUT";
export const SET_CHOICE = "SET_CHOICE";

export const set_login = (nama, nim, prodi, token) => {
  return {
    type: SET_LOGIN,
    payload: {
      nama,
      nim,
      prodi,
      token,
      isLogged: true,
    },
  };
};

export const set_logout = () => {
  return {
    type: SET_LOGOUT,
    payload: {},
  };
};

export const set_choice = (kategori, value) => {
  return {
    type: SET_CHOICE,
    payload: {
      kategori,
      value,
    },
  };
};
