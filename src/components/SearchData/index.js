import { cn } from "@/lib/utils"
import { Input } from "../ui/input"
import { Icons } from "../Icons"

const SearchData = () => {
  return (
    <div className=" relative">
        <span className="absolute top-[5px] left-4">
            <Icons.searchIcon />
        </span>
        <Input placeholder={'Search'}  className={cn('h-[31px] min-w-[320px] indent-8  placeholder:text-[#B8BDC5] bg-[#EBEBEB]')} />
    </div>
  )
}

export default SearchData