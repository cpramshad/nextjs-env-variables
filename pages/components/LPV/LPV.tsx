import React from "react";
import { Listing } from "../Listing/Listing";
import styles from "./LPV.module.css";

export const LPV = () => {
  return (
    <div>
      <div className={styles.center}>Listings</div>
      <Listing
        imageUrl="/listing-image.png"
        title="listing1"
        subtitle="listing description"
      />
    </div>
  );
};
