import Image from "next/image";
import styles from "./Listing.module.css";
interface ListingProps {
  imageUrl: string;
  title: string;
  subtitle: string;
}

export const Listing: React.FC<ListingProps> = ({
  imageUrl,
  title,
  subtitle,
}) => {
  return (
    <div>
      <div className={styles.imageContainer}>
        <Image
          alt="listing image"
          src={imageUrl}
          width={282}
          height={193}
          objectFit="cover"
        />
      </div>
      <div>
        <div>{title}</div>
        <div>{subtitle}</div>
      </div>
    </div>
  );
};
