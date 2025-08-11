export const APP_NAME = "kwari";

export const ACCESS_TOKEN = APP_NAME + "-access";

export const REFRESH_TOKEN = APP_NAME + "-refresh";

export const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const REFRESH_TOKEN_URL = BASE_URL + "/api/auth/refresh/";

export const CURRENCY_LOCALES = {
  USD: "en-US",
  EUR: "de-DE",
  GBP: "en-GB",
  NGN: "en-NG",
  CNY: "zh-CN",
  JPY: "ja-JP",
  AUD: "en-AU",
  CAD: "en-CA",
} as const;
