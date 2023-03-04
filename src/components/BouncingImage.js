import Image from "next/image";
import styles from "../styles/Home.module.css";

const BouncingImage = () => {
  return (
    <div className={styles.imageWrapper}>
      <Image
        src="/volleyball.png"
        alt="Bouncing Image"
        width={300}
        height={300}
        className={styles.bouncingImage}
      />
    </div>
  );
};

export default BouncingImage;
