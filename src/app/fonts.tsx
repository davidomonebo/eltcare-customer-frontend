import { Oxygen, Poppins, Nunito } from "next/font/google";

export const poppinsFont = Poppins({
  weight: "400",
  subsets: ["latin"],
  variable: "--poppin-fonts",
});

export const oxygenFont = Oxygen({
  weight: "400",
  subsets: ["latin"],
  variable: "--oxygen-fonts",
});

export const nunitoFont = Nunito({
  weight: "400",
  subsets: ["latin"],
  variable: "--nunito-fonts",
});