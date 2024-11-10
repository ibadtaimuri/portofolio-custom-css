import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import styles from "@/styles/Contact.module.css";
const Contact = () => (
    <>
        <Navbar />
        <main className={`${styles.main} container`}>
            <h1>Contact Me</h1>
            <p>If you’d like to get in touch, please reach out via email or phone.</p>
            <div className={styles.contactInfo}>
                <p><strong>Email:</strong> <a href="mailto:example@portfolio.com">ibad.taimuri@icloud.com</a></p>
                <p><strong>Phone:</strong> +92 (332) 062-2777</p>
            </div>
        </main>
        <Footer />
    </>
);

export default Contact;