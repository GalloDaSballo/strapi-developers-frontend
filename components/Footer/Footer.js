import Link from 'next/link';
import styles from './Footer.module.css';

const FooterLink = ({ dest, label }) => (
    <Link href={dest}>
        <a>
            <div>{label}</div>
        </a>
    </Link>
);

export default function Footer() {
    return (
        <footer className={styles.container}>
            <div className={styles.imageContainer}>
                <img alt="strapi developers logo" src="/footer-img.svg" />
            </div>
            <div className={styles.columns}>
                <div className={styles.column}>
                    <h4>Legal</h4>

                    <FooterLink dest="/cookies" label="Cookie Policy" />
                    <FooterLink dest="/privacy" label="Privacy Policy" />
                    <FooterLink dest="/terms-and-conditions" label="Terms and Condition" />
                </div>
                <div className={styles.column}></div>
                <div className={styles.column}>
                    <h4>About</h4>
                    <p>
                        Strapi Developers is the worlds leading site to find and hire the best
                        Strapi Developers in the world
                    </p>
                </div>
            </div>
        </footer>
    );
}
