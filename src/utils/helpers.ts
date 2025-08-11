import { CURRENCY_LOCALES } from "constants/settings";

type CurrencyType = keyof typeof CURRENCY_LOCALES;
export function formatCurrency(amount: number, currency: CurrencyType = "NGN") {
  const locale = CURRENCY_LOCALES[currency];
  const options: Intl.NumberFormatOptions = { currency, style: "currency" };

  return new Intl.NumberFormat(locale, options).format(amount);
}
