import { Auth, Provider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import { setUser } from "../Action/Action.jsx";

import { toast } from "react-toastify";

export function SingInAPI() {
  return (dispatch) => {
    signInWithPopup(Auth, Provider)
      .then((payload) => {
        dispatch(setUser(payload.user));
        toast.success("You're logged in", {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((error) => {
        toast.warning("Please wait", {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };
}
export function SingOutAPI() {
  return (dispatch) => {
    Auth.signOut()
      .then(() => {
        dispatch(setUser(null));
        toast.success("You're logged out", {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((error) => {
        toast.error("Please try again", {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };
}
