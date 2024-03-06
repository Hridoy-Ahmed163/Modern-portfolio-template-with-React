import { Roboto, Poppins } from "next/font/google";


const roboto_init = Roboto({
  subsets: ['latin'],
  weight: ['300','700','900'],
  variable: '--font-roboto',
});


const poppins_init = Poppins({
  subsets: ['latin'],
  weight: ['300','700','900'],
  variable: '--font-poppins',
});

export const roboto = roboto_init.variable;
export const poppins = poppins_init.variable;