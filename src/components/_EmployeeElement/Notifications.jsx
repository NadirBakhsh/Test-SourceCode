import { Icons } from "../Icons"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const Notifications = () => {
  return (
    <Popover>
    <PopoverTrigger className="cursor-pointer" asChild>
    <Icons.notify  />
    </PopoverTrigger>
    <PopoverContent  className="w-80 mr-8 mt-2">
      <h1>test notifatuon</h1>
    </PopoverContent>
  </Popover>
  )
}

export default Notifications