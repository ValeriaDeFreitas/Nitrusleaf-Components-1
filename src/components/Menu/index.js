import { useState } from "react";
import styles from "@/components/Menu/Menu.module.css";
import Link from "next/link";

const Menu = () => {
  

  return (
    <nav className={styles.navbar}>
      <div className={styles.icon}>
        
            <Link href="/">
            </Link>
            <Link href="/">
            <img src="/images/flowbite_home-solid.png" alt="" className={styles.img} />
            </Link>
            <Link href="/">
            <img src="/images/mdi_report-box-outline.png" alt="" className={styles.img} />
            </Link>
            <Link href="">
            <img src="/images/eos-icons_drone.png" alt="" className={styles.img} />
            </Link>
            <Link href="/">
            <img src="/images/tabler_settings.png" alt="" className={styles.img} />
            </Link>
            <Link href="/">
            <img src="/images/ic_round-exit-to-app.png" alt="" className={styles.img} />
            </Link>
      </div>
      <div className={styles.icon} id="menuBtn">
      </div>
    </nav>
  );
};

export default Menu;
