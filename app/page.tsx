import Image from "next/image";
import styles from "./page.module.css";
import Card from "./components/elements/Card";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/brand.svg"
          alt="Brand Logo"
          width={180}
          height={37}
          priority
        />
        <div className={styles.thirteen}>
          <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
        </div>
      </div>
      <div className={styles.grid}>
        <Card
          title={"About"}
          desc={
            "Starter template, created with Nextjs 13, Typescript and Prisma, with an advanced folder structure for large-scale applications. supported MDX including theming and authentication system (SEO & Accessibility 100%)"
          }
        />
        <Card
          title={"Technologies"}
          desc={
            "Nextjs13 (next-auth) / Typescript / Prisma / Redux RTK / MDX / SASS / Tailwindcss / Framer motion / Flowbite / react-email / react-hot-toast / react icons & hero icons"
          }
        />
        <Card
          title={"Author"}
          desc={"Created with love by Amin Benz 💙"}
          as="link"
          href="https://aminbenz.vercel.app"
        />
      </div>
    </main>
  );
}
