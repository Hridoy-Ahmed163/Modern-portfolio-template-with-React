
import type { Metadata } from "next"
import { poppins, roboto } from "./utils/font";

export const metadata: Metadata = {
  title: 'Mark Portfolio',
  description : 'this is description'
}




export default function RootLayout({ children, }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={`${roboto} ${poppins}`}>
        {children}
      </body>
    </html>
  )
}
