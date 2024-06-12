import type { Metadata } from "next";
import { Bebas_Neue, Open_Sans } from "next/font/google";
import "./globals.css";

//components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


//configure font imported above
const bebas = Bebas_Neue({ subsets: ["latin"],
  weight:'400'
});
const opensans = Open_Sans({subsets:["latin"],
  weight:'400'                            
});

export const metadata: Metadata = {
  title: "AEGEE-Paris",
  description: "The European Students' forum",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={opensans.className}>        
       <Navbar />
      {children}
      <Footer />
      </body>
    </html>
  );
}
