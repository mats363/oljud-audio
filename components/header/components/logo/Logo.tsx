import Link from "next/link";
import LogoIcon from "../../../../assets/svgs/logo.svg";

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <LogoIcon />
    </Link>
  );
};
export default Logo;
