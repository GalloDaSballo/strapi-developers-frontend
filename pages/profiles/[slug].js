import Head from 'next/head'
import { fromImageToUrl, API_URL } from '../../utils/urls'
import styles from '../../styles/ProfilePage.module.css'
import profileStyles from '../../styles/Profile.module.css'
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

const Profile = ({ profile }) => {
  return (
    <div>
        <Head>
            <title>Strapi Developers</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700"></link>
        </Head>

        <div className={styles.container}>
            <div className={styles.navbar}>
                <img src="/strapi-dev-logo.svg" />
                <div className={styles.left_nav_button}>
                    <button className={styles.login}>
                        Log In
                    </button>

                    <button className={styles.job}>
                        Post a job
                    </button>
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
            <div className={styles.container_card}>
                <div className={styles.back}>
                <p>
                    <Link href={"/"}>
                        <a>
                            &lt; Back
                        </a>
                    </Link>
                </p>
                </div>
                <div className={styles.card}>
                    <div className={styles.card_row}>
                        <div className={styles.left_column}>
                            <div className={styles.img_profile} 
                                 style={{backgroundImage: `url(${fromImageToUrl(profile.image)})`}}
                            />
                            <div className={styles.info_profile}>
                                <h3>{profile.name}</h3>
                                <p>{profile.location}</p>
                                {
                                    profile.online === true 
                                    ? <p className={profileStyles.online_text}>Online</p>
                                    : <p className={styles.last_seen}>Last seen {profile.online}h ago</p>
                                }
                                <button className={`${profileStyles.available} ${styles.send_message}`}>Send Message</button>
                            </div>
                        </div>
                        <div className={styles.right_column}>
                                <div class={styles.info_section}>
                                    <p class={styles.info_section_title}>Availability</p>
                                    <p>Full time (40/h week)</p>
                                    <span className={`${styles.available} ${styles.desktop}`}>Available</span>
                                </div>
                                <div class={styles.info_section}>
                                    <span className={`${styles.available} ${styles.mobile}`}>Available</span>
                                </div>
                                <div class={styles.info_section}>
                                    <p class={styles.info_section_title}>Time Zones</p>
                                    <p>Full time (40/h week)</p>
                                </div>
                                <div class={styles.info_section}>
                                    <p class={styles.info_section_title}>Preferred Salary</p>
                                    <p>Full time (40/h week)</p>
                                </div>
                                <div class={styles.info_section}>
                                    <p class={styles.info_section_title}>Fluent in</p>
                                    <p>Full time (40/h week)</p>
                                </div>
                                <div class={styles.info_section}>
                                    <img src="/site-web.svg" />
                                    <img src="/github.svg" />
                                    <img src="/twitter.svg" />
                                    <img src="/instagram.svg" />
                                    <img src="/location.svg" />
                                </div>
                        </div>
                    </div>
                    <div className={styles.line_card} />
                    <div className={styles.card_row}>
                        <div className={styles.skilled_in}>
                            <h4>Skilled in</h4>
                            <div className={styles.skills}>
                                {
                                    profile.skills.map(skill => (
                                        <div className={profileStyles.skill_item}>{skill.label}</div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className={`${styles.line_card} ${styles.mobile}`} />
                        <div className={styles.bio}>
                            <h4>About</h4>
                            <p>
                            I’m a web developer. I spend my whole day, practically every day, experimenting with HTML, CSS, 
                            and JavaScript; dabbling with Python and Ruby; and inhaling a wide variety of potentially useless 
                            information through a few hundred RSS feeds. I build websites that delight and inform. I do it well.
                            I’m curious, and I enjoy work that challenges me to learn something new and stretch in a different 
                            direction. I do my best to stay on top of changes in the state of the art so that I can meet challenges 
                            with tools well suited to the job at hand. The list of projects I follow on GitHub will give you a good 
                            idea of the types of tools I’d prefer to be using, and my Instapaper “Starred” list will give you a 
                            glimpse into the reading material I find interesting enough to share.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={`${styles.footer} ${styles.mobile}`}>
        <img src="/footer-img.svg" />
      </div>
    </div>
  )
}

export async function getStaticProps({params: {slug}}) {
  const profile_res = await fetch(`${API_URL}/profiles/?slug=${slug}`)
  const found = await profile_res.json()

  return {
    props: {
        profile: found[0]
    }
  }
}

export async function getStaticPaths() {
    const profile_res = await fetch(`${API_URL}/profiles`)
    const profiles = await profile_res.json()

    return {
        paths: profiles.map(el => ({
            params: {slug: String(el.slug)}
        })),
        fallback: false
    };
}
  
export default Profile