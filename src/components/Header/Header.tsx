import Image from "next/image";
import { HeaderWrapper } from "./HeaderStyles";
import logoImg from "../../assets/logo.svg";
function Header() {
  return (
    <HeaderWrapper>
      <Image src={logoImg} alt="" />
    </HeaderWrapper>
  );
}

export default Header;
