import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { DPV } from "../../components/DPV/DPV";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function DPVHome() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <Head>
        <title>LPV page</title>
        <meta name="description" content="Listing page view" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <DPV id={id} />
      </main>
    </>
  );
}
