import React from "react";
import { Listing } from "../Listing/Listing";
import styles from "./LPV.module.css";

export const LPV = () => {
  const listingCount = 5;
  return (
    <div>
      <div className={styles.center}>Listings</div>
      {Array.from({ length: listingCount }).map((_, index) => (
        <Listing
          key={index}
          imageUrl="/listing-image.png"
          title="listing"
          subtitle="listing description"
          number={index + 1}
        />
      ))}
    </div>
  );
};
