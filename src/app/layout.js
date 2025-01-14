import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Tiago Diniz",
  description: "Product Designer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={spaceGrotesk.className}>
        {children}
      </body>
    </html>
  );
}
