import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Hero from "../components/hero/Hero.jsx";
import HomeSection from "../components/home/HomeSection.jsx";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Coffify</title>
        <meta
          name="description"
          content="Order you coffee and we will deliver it to you"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeSection />
    </div>
  );
}
