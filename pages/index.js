import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="keyword" content="nextjs, huntingcoder blog, hunting coder" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.main} ${inter.className}`}>



        <div className={styles.imagewrap}>
          <Image className={styles.myImg} src="/home.jpg" alt="home img" width={237} height={158} />
        </div>

        <h1 className={styles.h1}>Hunting Coders</h1>
        <p className={styles.p}>A blog for hunting coders by a hunting coder</p>

        <div>
          <h1>Popular Blogs</h1>
          <div className="blogItem">
            <h2 className={styles.h2}>How to learn javascript in 2022</h2>
            <p>Javascript is client side scripting language</p>
          </div>
          <div className="blogItem">
            <h2 className={styles.h2}>How to learn javascript in 2022</h2>
            <p>Javascript is client side scripting language</p>
          </div>
          <div className="blogItem">
            <h2 className={styles.h2}>How to learn javascript in 2022</h2>
            <p>Javascript is client side scripting language</p>
          </div>
        </div>
      </main>
    </>
  );
}
