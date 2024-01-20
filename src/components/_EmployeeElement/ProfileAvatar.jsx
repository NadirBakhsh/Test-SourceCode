import { Icons } from "../Icons";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ProfileAvatar = () => {
  return (
    <Popover>
      <PopoverTrigger className="cursor-pointer" asChild>
        <div className="flex items-center gap-2 ">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Icons.arrowDown />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-80 mr-8 mt-1">
        <h1>test ProfileAvatar</h1>
      </PopoverContent>
    </Popover>
  );
};

export default ProfileAvatar;
