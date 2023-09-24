import React from "react";
import Link from "next/link";
import { Listing } from "../Listing/Listing";
import styles from "./LPV.module.css";

export const LPV = () => {
  const listingCount = 5;
  return (
    <div>
      <div className={styles.header}>
        <button className={styles.backBtn}>
          <Link href={"/"}>{`< Back`}</Link>
        </button>
        <h1>Listing</h1>
      </div>
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
