import styles from "./About.module.scss";

const About: React.FC = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.header}>Oljud Audio</h1>
      <article className={styles.article}>
        <p>
          At Oljud, we believe in the power of sound to enhance and transform
          any creative project. Our passion is to provide musicians, producers,
          and sound designers with the highest quality audio tools to bring
          their vision to life. That is why we carefully curate and produce a
          diverse range of organic and high-quality audio samples, impulse
          responses, and Kontakt instruments. We are dedicated to delivering
          products that are not only functional but also inspire and enhance the
          creative process. Our commitment to excellence extends to every aspect
          of our business, from the selection of our products to the level of
          customer service we provide. We are on a mission to empower your sound
          design experience and help you take your creations to the next level.
          Join us on this journey and discover the endless possibilities of
          sound.
        </p>
      </article>
    </section>
  );
};

export default About;
