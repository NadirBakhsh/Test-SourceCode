import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <div className="w-[1440px] h-[2081px] absolute -z-10">
          <Image fill alt="dl" src={'/images/DL.png'} className="object-contain" />
        </div>




        {/* {children} */}
        
        
        </body>
    </html>
  );
}
