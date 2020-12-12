import styles from '../styles/Masthead.module.css'
import Link from 'next/link'

/**
 * If in mobile view open and close the menu
 */
const handlePopupClick = () => {
    var menu = document.querySelector('#menu_popup');

    if(menu.classList.contains('close') == true) {
        menu.style.display = "block"
        menu.classList.remove('close')
    } else {
        menu.style.display = "none"
        menu.classList.add('close')
    }
    
}

export default function Masthead () {
    return (
        <div className={styles.container}>
            <div className={styles.nav}>
                <img src="/strapi-dev-logo.svg" />
                <div className={styles.left_nav_button}>
                    <Link href={'/login'}>
                        <a>
                        <button className={styles.login}>
                            Log In
                        </button>
                        </a>
                    </Link>
                    <Link href={'/job'}>
                        <a>
                        <button className={styles.job}>
                            Post a job
                        </button>
                        </a>
                    </Link>
                </div>
                <div className={styles.left_nav_hamburger} onClick={() => handlePopupClick()}>
                    <img src="/menu-ham.svg" />
                </div>
                <div id="menu_popup" className={`${styles.menu_popup} close`}>
                    <Link href={'/login'}>
                        <a>
                            <p>Log In</p>
                        </a>
                    </Link>
                    <Link href={'/job'}>
                        <a>
                            <p>Post a job</p>
                        </a>
                    </Link>
                </div>
            </div>
            <div className={styles.body}>
                <div className={styles.body_text}>   
                    <h1>Ready. Remote. Go!</h1>
                    <p>
                        There’s a new generation of workers who won’t be tied to any one place. 
                        They can’t be restricted by the confines of an office, or bound by the standard 9-5. 
                        The future of work is anywhere.
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
    )
}