import { Icons } from "../Icons"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const Emails = () => {
  return (
    <Popover>
      <PopoverTrigger className="cursor-pointer" asChild>
      <Icons.mail />
      </PopoverTrigger>
      <PopoverContent  className="w-80 mr-8 mt-2">
        <h1>test email</h1>
      </PopoverContent>
    </Popover>
  )
}

export default Emails