import Image from "next/image";

export const Icons = {
  logo: (props) => (
    <div className="relative w-[250px] h-[89px]">
    <Image alt="hcm-logo" fill src={'/images/hcm-logo.png'}  />
    </div>
  ),
  mainLogo: (props) => (
    <div className="relative w-[160px] h-[40px]">
    <Image alt="main-logo" fill src={'/images/main-logo.png'} />
    </div>
  ),
};