import axios from "axios";
import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { authStatus, tokenStatus } from "../Provider/AuthAtom";

export const useAuthentication = () => {
  const [authState, setAuthState] = useRecoilState(authStatus);
  const [token, setToken] = useRecoilState(tokenStatus);

  const fetchAuthState = useCallback(() => {
    axios
      .get("/api/auth/refreshtoken")
      .then((response) => {
        console.log("this is response");
        console.log(response);
        setToken(response.data.accessToken);
        setAuthState("loggedIn");
      })
      .catch(() => setAuthState("loggedOut"));
  }, [setAuthState, setToken]);
  return { token, authState, setAuthState, fetchAuthState };
};
