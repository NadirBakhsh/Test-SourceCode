import useFonts from "@/hooks/useFonts";
import { cn } from "@/lib/utils";

export function TypographyH1({children, className}) {
    const { kanit, inter } = useFonts();

    return (
        <h1 className={cn("text-[24px] font-bold text-center", className, kanit)}>
        {children}
      </h1>
    )
  }