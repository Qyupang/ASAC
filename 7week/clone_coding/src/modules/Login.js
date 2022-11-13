const LOGIN = 'login/LOGIN';
const LOGOUT = 'login/LOGOUT';

export const login = () => ({
  type: LOGIN,
});

export const logout = () => ({
  type: LOGOUT,
});

const initialState = {
  logged: false,
};

export default function bookmark(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        logged: true,
      };
    case LOGOUT:
      return {
        logged: false,
      };
    default:
      return state;
  }
}
