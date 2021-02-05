import Head from 'next/head';
import Link from 'next/link';
import Footer from '../comps/Footer';
import Navbar from '../comps/Navbar';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        quaerat nemo excepturi voluptatibus voluptatem laudantium cumque soluta
        molestias quibusdam suscipit in, nulla ratione! Animi odit voluptate
        impedit rerum numquam? Tempora?
      </p>
      <Link href="/ninjas">
        <a className={styles.btn} href>
          See Ninja Listing
        </a>
      </Link>
    </div>
  );
}
