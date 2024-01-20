import SearchData from "../SearchData"
import Emails from "./Emails"
import Notifications from "./Notifications"
import ProfileAvatar from "./ProfileAvatar"

const ProfileBar = () => {
  return (
    <div className="flex flex-1 justify-between items-center py-5">
        <SearchData />
        <div className="flex gap-8 items-center">
            <Emails />
            <Notifications />
            <ProfileAvatar />
        </div>
    </div>
  )
}

export default ProfileBar