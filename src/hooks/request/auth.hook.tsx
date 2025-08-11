"use client";
import api from "utils/request";
import { TokenManager } from "utils/token";
import { useMutation } from "@tanstack/react-query";
import { useAuthContext } from "components/providers/auth.provider";

export function useSignOut() {
  const authContext = useAuthContext();

  return function () {
    TokenManager.clearTokens();
    authContext.setLogged(false);
  };
}

export function useSignUp() {
  return useMutation({
    mutationKey: ["sign-up"],
    async mutationFn(data: Partial<IUser>) {
      const res = await api.post("auth/signup/", data);
      return res.data as object;
    },
  });
}

export function useSignIn() {
  const authContext = useAuthContext();

  return useMutation({
    mutationKey: ["sign-in"],
    async mutationFn(data: Partial<IUser>) {
      const res = await api.post("auth/signin/", data);
      return res.data as IToken;
    },
    onSuccess(data: IToken) {
      authContext.setLogged(true);
      TokenManager.setTokens(data.access, data.refresh);
    },
  });
}
