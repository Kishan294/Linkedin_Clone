import { auth, provider } from "../firebase.config";
import { signInWithPopup } from "firebase/auth";
import { SET_USER } from "./actionType";

export const setUser = (payload) => ({
  type: SET_USER,
  user: payload,
});

export function signInApi() {
  return (dispatch) => {
    signInWithPopup(auth, provider)
      .then((payload) => {
        // console.log(payload.user);
        dispatch(setUser(payload.user));
      })
      .catch((error) => alert(error.message));
  };
}

export function getUserAuth() {
  return (dispatch) => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(setUser(user));
      }
    });
  };
}

export function signOutApi() {
  return (dispatch) => {
    auth.signOut
      .then(() => {
        dispatch(setUser(null));
      })
      .catch((error) => console.log(error.message));
  };
}
