import Image from "next/image";
import Link from "next/link";
import { HeaderWrapper } from "./HeaderStyles";
import logoImg from "../../assets/logo.svg";
import Drawer from "../Drawer";
import { usePathname } from "next/navigation";
function Header() {
  const pathname = usePathname();
  const isSuccess = pathname !== "/success";
  return (
    <HeaderWrapper
      css={{ justifyContent: `${isSuccess ? "space-between" : "center"}` }}
    >
      <Link href="/" aria-label="Home" prefetch={false}>
        <Image src={logoImg} alt="" />
      </Link>
      {isSuccess && <Drawer />}
    </HeaderWrapper>
  );
}

export default Header;
