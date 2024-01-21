import { NavigationMenu } from "@/components/NavigationMenu";
import ProfileBar from "@/components/_EmployeeElement/ProfileBar";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";

import 'react-circular-progressbar/dist/styles.css';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <div className="min-h-screen flex overflow-hidden">
      
            <NavigationMenu />
     

          <div className={cn("dashboard w-full relative")}>
            <div className="profile-header flex items-center border-b border-[#E9EAEC] shadow-sm  flex-1 shrink-0 h-[60px] w-full px-5 sm:px-[30px] z-10">
              <ProfileBar />
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
