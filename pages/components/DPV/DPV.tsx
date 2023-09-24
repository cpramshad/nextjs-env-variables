import Image from "next/image";
import Link from "next/link";
import styles from "./DPV.module.css";
interface DPVProps {
  id: any; // Depending on the nature of your ID, it could be string or number
}
export const DPV: React.FC<DPVProps> = ({ id }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button className={styles.backBtn}>
          <Link href={"/lpv"}>{`< Back`}</Link>
        </button>
        <h1>Listing Details</h1>
      </div>
      <div className={styles.content}>
        <Image
          alt="listing image"
          src="/listing-image.png"
          width={500}
          height={500}
        />
        <div className={styles.details}>
          <p>Details of the product</p>
          <button className={styles.button}>Show phone number</button>
        </div>
      </div>
    </div>
  );
};
