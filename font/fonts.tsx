import { Poppins, Roboto } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ['300', '600', '900'],
  variable: "--font-poppins",
});
export const roboto = Roboto({
  subsets: ["latin"],
  weight: ['100', '500', '900'],
  variable: "--font-poppins",
});