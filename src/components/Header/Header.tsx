import Image from "next/image";
import Link from "next/link";
import { HeaderWrapper } from "./HeaderStyles";
import logoImg from "../../assets/logo.svg";
import Drawer from "../Drawer";
function Header() {
  return (
    <HeaderWrapper>
      <Link href="/" prefetch={false}>
        <Image src={logoImg} alt="" />
      </Link>
      <Drawer />
    </HeaderWrapper>
  );
}

export default Header;
