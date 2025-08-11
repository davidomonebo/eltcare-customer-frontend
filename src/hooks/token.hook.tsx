import React from "react";
import { TokenManager } from "utils/token";

export const useTokenListener = (interval: number = 60_000) => {
  React.useEffect(() => {
    checkToken();
    async function checkToken() {
      try {
        const accessToken = TokenManager.getAccessToken();
        if (accessToken && TokenManager.isTokenExpired(accessToken))
          await TokenManager.refreshAccessToken();
      } catch (error) {
        TokenManager.clearTokens();
        console.error("Error in token listener:", error);
      }
    }

    const intervalId = setInterval(checkToken, interval);
    return () => clearInterval(intervalId);
  }, [interval]);
};
