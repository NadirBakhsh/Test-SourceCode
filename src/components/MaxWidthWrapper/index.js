import { cn } from "@/lib/utils"

const MaxWidthWrapper =({
    className,
    children
}) => {
    return (
        <div className={cn("mx-auto w-full max-w-[1440px] px-2 md:px-[30px]", className)}>
            {children}
        </div>
    )
}

export default MaxWidthWrapper