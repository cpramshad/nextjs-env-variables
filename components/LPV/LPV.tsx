import React from "react";
import Link from "next/link";
import { Listing } from "../Listing/Listing";
import styles from "./LPV.module.css";

export const LPV = () => {
  console.log("****process.env", process.env.NEXT_PUBLIC_LISTING_COUNT);
  const listingCount = parseInt(
    process.env.NEXT_PUBLIC_LISTING_COUNT || "5",
    10
  );
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
