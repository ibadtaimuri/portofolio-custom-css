import Link from 'next/link';
import styles from '@/styles/Navbar.module.css';

const Navbar = () => (
    <nav className={styles.navbar}>
        <div className="container">
            <h1 className={styles.logo}>Ibad Taimuri</h1>
            <ul className={styles.navLinks}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </div>
    </nav>
);

export default Navbar;