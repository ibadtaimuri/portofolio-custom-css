import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import styles from "@/styles/About.module.css";

const About = () => (
    <>
        <Navbar />
        <main className={`${styles.main} container`}>
            <h1>About Me</h1>
            <p>With years of experience in web development and IT Infrastructure Management, I have a solid foundation in various technologies.</p>
            <h2 className={styles.skills}>Skills</h2>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Python</li>
                <li>PHP</li>
                <li>MongoDB</li>
                <li>Firewall Administration & Management</li>
                <li>System Administration</li>
                <li>Windows Server Administration</li>
                <li>Network Administration</li>
            </ul>
        </main>
        <Footer />
    </>
);

export default About;