import Link from "next/link";
import React from "react";
import styles from "./menuCategories.module.css";

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      <Link
        href="/blog?cat=style"
        className={`${styles.categoryItem} ${styles.style}`}
      >
      Life Style
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.fashion}`}>
        Fashion
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.food}`}>
        Sports
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.travel}`}>
        Music
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.culture}`}>
        Birthday
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.coding}`}>
        Coding
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.coding}`}>
        News
      </Link>
    </div>
  );
};

export default MenuCategories;
