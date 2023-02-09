import React from "react";
import styles from "./Footer.module.scss";
import Email from "../../assets/svgs/email.svg";
import FacebookIcon from "../../assets/svgs/facebook.svg";
import InstagramIcon from "../../assets/svgs/instagram.svg";
import TikTokIcon from "../../assets/svgs/tiktok.svg";
const Footer: React.FC = () => {
  return (
    <footer className={styles.container}>
      <section className={styles.infoBox}>
        <h3>Ojud Audio</h3>
        <p>
          All samples recorded and produced by Oljud Audio. You are free to use
          them how you please. Payments securely handled by Stripe.
        </p>
      </section>
      <section className={styles.contactBox}>
        <h3>Contact</h3>
        <div className={styles.email}></div>

        <div className={styles.socialMedia}>
          <a href="mailto:info@oljud.com">
            <Email />
          </a>
          <a href="https://www.facebook.com/oljudaudio">
            <FacebookIcon />
          </a>
          <a href="https://www.instagram.com/oljudaudio">
            <InstagramIcon />
          </a>
          <a href="http://www.tiktok.com/oljudaudio">
            <TikTokIcon />
          </a>
        </div>
      </section>
    </footer>
  );
};
export default Footer;
