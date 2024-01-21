import Image from "next/image";

export const Icons = {
  logo: (props) => (
    <div className="relative w-[250px] h-[89px]">
      <Image alt="hcm-logo" fill src={"/images/hcm-logo.png"} />
    </div>
  ),
  mainLogo: (props) => (
    <div className="relative w-[160px] h-[40px]">
      <Image alt="main-logo" fill src={"/images/main-logo.png"} />
    </div>
  ),

  mail: ({ isActive }) =>
    isActive ? (
      <div className="relative w-[24px] h-[24px]">
        <Image alt="mail-icon" fill src={"/svg/mail-on.svg"} />
      </div>
    ) : (
      <div className="relative w-[24px] h-[24px]">
        <Image alt="mail-icon" fill src={"/svg/mail-off.svg"} />
      </div>
    ),

  notify: ({ isActive }) =>
    isActive ? (
      <div className="relative w-[24px] h-[24px]">
        <Image alt="main-logo" fill src={"/svg/notify-on.svg"} />
      </div>
    ) : (
      <div className="relative w-[24px] h-[24px]">
        <Image alt="notify-logo" fill src={"/svg/notify-off.svg"} />
      </div>
    ),

  arrowDown: ({}) => (
    <div className="relative w-[14px] h-[14px]">
      <Image alt="main-logo" fill src={"/svg/arrow-down.svg"} />
    </div>
  ),

  searchIcon: ({}) => (
    <div className="relative w-[20px] h-[20px]">
      <Image alt="main-logo" fill src={"/svg/searchIcon.svg"} />
    </div>
  ),

  growUpIcon: ({}) => (
    <div className="relative w-[20px] h-[20px]">
      <Image alt="main-logo" fill src={"/svg/grow-up.svg"} />
    </div>
  ),

  dashboard: ({}) => (
    <div className="relative w-[20px] h-[20px]">
      <Image alt="main-logo" fill src={"/svg/dashboard.svg"} />
    </div>
  ),

  setting: ({}) => (
    <div className="relative w-[20px] h-[20px]">
      <Image alt="main-logo" fill src={"/svg/setting.svg"} />
    </div>
  ),

  menuBack: ({}) => (
    <div className="relative w-[26px] h-[26px]">
      <Image alt="main-logo" fill src={"/svg/menu-back.svg"} />
    </div>
  ),

  hrcWhiteLogo: ({}) => (
    <div className="relative w-[122px] h-[31px]">
      <Image alt="main-logo" fill src={"/images/hrc-white-logo.png"} />
    </div>
  ),

};
