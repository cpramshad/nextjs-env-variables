import Image from "next/image";
import Link from "next/link";
import styles from "./Listing.module.css";
interface ListingProps {
  imageUrl: string;
  title: string;
  subtitle: string;
  number: number;
}

export const Listing: React.FC<ListingProps> = ({
  imageUrl,
  title,
  subtitle,
  number,
}) => {
  return (
    <Link href={`/dpv/${number}`}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image alt="listing image" src={imageUrl} width={282} height={193} />
        </div>
        <div className={styles.descriptionContainer}>
          <div className={styles.title}>{`${title} ${number}`}</div>
          <div className={styles.subtitle}>{subtitle}</div>
        </div>
      </div>
    </Link>
  );
};
