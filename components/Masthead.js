import styles from '../styles/Masthead.module.css';
import Header from '../components/Header';

export default function Masthead() {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.body}>
                <div className={styles.body_text}>
                    <h1>Ready. Remote. Go!</h1>
                    <p>
                        There’s a new generation of workers who won’t be tied to any one place. They
                        can’t be restricted by the confines of an office, or bound by the standard
                        9-5. The future of work is anywhere.
                    </p>
                    <div className={styles.search_box}>
                        <input
                            type="text"
                            className={styles.search_input}
                            placeholder="Add skill you're hiring"
                        />
                        <button className={styles.search_button}>Search</button>
                    </div>
                </div>
                <div className={styles.cropped}>
                    <img src="/header-img.svg" />
                </div>
            </div>
        </div>
    );
}
