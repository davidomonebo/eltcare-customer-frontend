import axios from "axios";
import Cookie from "js-cookie";
import { jwtDecode } from "jwt-decode";
import * as KEY from "constants/settings";

export const TokenManager = {
  getAccessToken() {
    console.log("getting access token");
    return Cookie.get(KEY.ACCESS_TOKEN);
  },

  getRefreshToken() {
    console.log("getting refresh token");
    return Cookie.get(KEY.REFRESH_TOKEN);
  },

  clearTokens() {
    console.log("clearing token");

    const expires = new Date();
    Cookie.remove(KEY.ACCESS_TOKEN, { expires });
    Cookie.remove(KEY.REFRESH_TOKEN, { expires });
  },

  async setTokens(accessToken: string, refreshToken: string) {
    const accessExpiry = this.parseDate(accessToken);
    const refreshExpiry = this.parseDate(refreshToken);

    Cookie.set(KEY.ACCESS_TOKEN, accessToken, { expires: accessExpiry });
    Cookie.set(KEY.REFRESH_TOKEN, refreshToken, { expires: refreshExpiry });
  },

  isTokenExpired(token: string) {
    console.log("checking token expiry");

    const decoded: { exp: number } = jwtDecode(token);
    const currentTime = Math.floor(Date.now() / 1000);
    return decoded.exp <= currentTime;
  },

  parseDate(token: string) {
    try {
      const decoded: { exp: number } = jwtDecode(token);
      const expires = new Date(decoded.exp * 1000);

      return expires;
    } catch (error) {
      console.error("Error parsing token:", error);
      return new Date();
    }
  },

  async refreshAccessToken() {
    console.log("refreshing access token");

    const refreshToken = this.getRefreshToken();
    if (!refreshToken) throw new Error("No refresh token found");

    try {
      const response = await axios.post(KEY.REFRESH_TOKEN_URL, {
        refresh: refreshToken,
      });
      const { access, refresh } = response.data;
      await this.setTokens(access, refresh || refreshToken);
    } catch (error) {
      console.error("Failed to refresh token:", error);
      throw error;
    }
  },
};
