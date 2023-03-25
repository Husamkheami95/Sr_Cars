import Image from "next/image";
import React from "react";
import styles from "./Footer.module.css";
import { BsWhatsapp } from "react-icons/Bs";
import { GoLocation } from "react-icons/Go";

import { ImPhone } from "react-icons/Im";
import { BsInstagram } from "react-icons/Bs";
import Link from "next/link";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <div className={styles.image}>
          <Image
            className={styles.logo}
            width={150}
            height={150}
            src="/logo.png"
          />
        </div>
        <div className="flex w-full justify-between items-end">
        <div className={styles.contact}>
         <p className="text-2xl">  Contact Info </p>
          <div className="flex gap-4">
            <div className="text-2xl">
              <GoLocation />
            </div>
            3135 Oliver St, Fort Worth TX 76134
          </div>
          <div className="flex gap-4">
            <div className="text-xl">
              <ImPhone />
            </div>
            Phone:+ (123) 456 74700
          </div>        
        </div>
        <div className={styles.social}>
          <Link className={styles.socialItem} href="/">
            <BsWhatsapp />
          </Link>
          <Link className={styles.socialItem} href="/">
            <BsInstagram />
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
