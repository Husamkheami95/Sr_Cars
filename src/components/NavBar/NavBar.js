import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./NavBar.module.css";
const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <Image
          className={styles.logo}
          width={150}
          height={150}
          src="/logo.png"
        />
        <ul className={styles.ul}>
          <li className={styles.li}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.li}>
            <Link href="/">about us</Link>
          </li>
          <li className={styles.li}>
            <Link href="/">contact us</Link>
          </li>
        </ul>
        <div></div>
      </div>
    </div>
  );
};

export default NavBar;
