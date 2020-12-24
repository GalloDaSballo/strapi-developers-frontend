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
                        Strapi Developers is a curated list of developers that use Strapi in their
                        work.
                    </p>

                    <p>
                        On Strapi Developers you can get in touch with some of the most cutting edge
                        developers, from all parts of the world
                    </p>
                    <p>
                        The list is curated by Alex The Entreprenerd, author of The Complete Strapi
                        Course
                    </p>
                </div>
            </div>
        </footer>
    );
}
