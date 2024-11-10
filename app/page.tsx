import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import styles from "@/styles/Home.module.css";
import Image from 'next/image';
export default function Home() {
  return (
    <>
      <Navbar />
      <main className={`${styles.main} container`}>
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1>Welcome to My Portfolio</h1>
            <p>I’m a passionate IT Personal with a love for creating beautiful and
              functional websites and have succeffuly managed IT Infrastructures
              for Private entities.</p>
          </div>
          <div className={styles.profileImage}>
            <Image
              src="/profile.jpg"
              alt="Profile Image"
              width={200}
              height={250}
              className={styles.image}
            />
          </div>
        </section>
        <section className={styles.projectsSection}>
          <h2>Featured Projects</h2>
          {/* Project cards can go here */}
        </section>
      </main>
      <Footer />
    </>
  );
}
