import Link from "next/link";
import LogoIcon from "../../../../assets/svgs/logo.svg";
import styles from "./Logo.module.scss";

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <LogoIcon className={styles.logo} />
    </Link>
  );
};
export default Logo;
