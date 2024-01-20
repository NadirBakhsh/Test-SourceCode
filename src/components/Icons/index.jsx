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
};
