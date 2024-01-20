import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <div className="w-[1440px] h-[2081px] absolute -z-10">
          <Image
            fill
            alt="dl"
            src={"/images/DL.png"}
            className="object-contain"
          />
        </div> */}

        <div className="min-h-screen flex">
          <div
            className={cn(
              "w-full max-w-[280px] flex-shrink-0 px-6 py-4  bg-[#289992] relative"
            )}
          >
            side Bar
          </div>

          <div className={cn("dashboard w-full relative")}>
            <div className="profile-header flex items-center border-b border-[#E9EAEC] shadow-sm  flex-1 shrink-0 h-[60px] w-full px-5 sm:px-[30px] z-10">
              User Profile header
            </div>

            <div className="pages px-5 flex-1 w-full shrink-0 h-auto min-h-full  sm:px-[30px] ">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
