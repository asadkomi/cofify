import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Hero from "../components/hero/Hero.jsx";
import HomeSection from "../components/home/HomeSection.jsx";

import axios from "axios";

export default function Home({coffeeList}) {
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
      <HomeSection coffeeList={coffeeList}/>
    </div>
  );
}


export const getServerSideProps = async (ctx) => {
  // const myCookie = ctx.req?.cookies || "";
  // let admin = false;

  // if (myCookie.token === process.env.TOKEN) {
  //   admin = true;
  // }

  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      coffeeList: res.data,
      // admin,
    },
  };
};