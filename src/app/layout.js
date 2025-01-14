import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import AnimatedCursor from "react-animated-cursor" 

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
        <AnimatedCursor
          color="115, 71, 251"
        />
        {children}
      </body>
    </html>
  );
}
