import Head from 'next/head';
import { fromImageToUrl, API_URL } from '../../utils/urls';
import styles from '../../styles/ProfilePage.module.css';
import profileStyles from '../../styles/Profile.module.css';
import Link from 'next/link';
import Header from '../../components/Header';

const Profile = ({ profile }) => {
    return (
        <div>
            <Head>
                <title>Strapi Developers</title>
            </Head>

            <div className={styles.container}>
                <Header dark />
                <div className={styles.container_card}>
                    <div className={styles.back}>
                        <p>
                            <Link href={'/'}>
                                <a>&lt; Back</a>
                            </Link>
                        </p>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.card_row}>
                            <div className={styles.left_column}>
                                <div
                                    className={styles.img_profile}
                                    style={{
                                        backgroundImage: `url(${fromImageToUrl(profile.image)})`
                                    }}
                                />
                                <div className={styles.info_profile}>
                                    {profile.hasPaid ? (
                                        <h3>{profile.name}</h3>
                                    ) : (
                                        <h3 className={styles.blur_item}>{profile.name}</h3>
                                    )}
                                    <p>{profile.title}</p>
                                    {profile.hasPaid ? (
                                        <p>{profile.location}</p>
                                    ) : (
                                        <p className={styles.blur_item}>{profile.location}</p>
                                    )}

                                    {/* {
                                    profile.online === true 
                                    ? <p className={profileStyles.online_text}>Online</p>
                                    : <p className={styles.last_seen}>Last seen {profile.online}h ago</p>
                                } */}
                                    <button
                                        className={`${profileStyles.available} ${styles.send_message}`}>
                                        Send Message
                                    </button>
                                </div>
                            </div>
                            <div className={styles.right_column}>
                                {profile.github && (
                                    <div className={`${styles.info_section} ${styles.social}`}>
                                        <img src="/github.svg" />
                                        <p
                                            className={profile.hasPaid ? '' : styles.blur_item}
                                            style={{ margin: 0 }}>
                                            {profile.github}
                                        </p>
                                    </div>
                                )}
                                {profile.linkedin && (
                                    <div className={`${styles.info_section} ${styles.social}`}>
                                        <img src="/linkedin.svg" />
                                        <p
                                            className={profile.hasPaid ? '' : styles.blur_item}
                                            style={{ margin: 0 }}>
                                            {profile.linkedin}
                                        </p>
                                    </div>
                                )}
                                <div className={styles.info_section}>
                                    <p className={styles.info_section_title}>Availability</p>
                                    <p>{profile.availability}</p>
                                    <span className={`${styles.available} ${styles.desktop}`}>
                                        Available
                                    </span>
                                </div>
                                <div className={styles.info_section}>
                                    <span className={`${styles.available} ${styles.mobile}`}>
                                        Available
                                    </span>
                                </div>
                                <div className={styles.info_section}>
                                    <p className={styles.info_section_title}>Time Zones</p>
                                    <p>{profile.time_zone}</p>
                                </div>
                                <div className={styles.info_section}>
                                    <p className={styles.info_section_title}>Preferred Salary</p>
                                    {profile.hasPaid ? (
                                        <p>{profile.preferred_salary}</p>
                                    ) : (
                                        <p className={styles.blur_item}>
                                            {profile.preferred_salary}
                                        </p>
                                    )}
                                </div>
                                <div className={styles.info_section}>
                                    <p className={styles.info_section_title}>Fluent in</p>
                                    <p>{profile.languages}</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.line_card} />
                        <div className={styles.card_row}>
                            <div className={styles.skilled_in}>
                                <h4>Skilled in</h4>
                                <div className={styles.skills}>
                                    {profile.skills.map((skill) => (
                                        <div key={skill.label} className={profileStyles.skill_item}>
                                            {skill.label}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className={`${styles.line_card} ${styles.mobile}`} />
                            <div className={styles.bio}>
                                <h4>About</h4>
                                <p>{profile.bio}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export async function getStaticProps({ params: { slug } }) {
    const profile_res = await fetch(`${API_URL}/profiles/?slug=${slug}`);
    const found = await profile_res.json();

    return {
        props: {
            profile: found[0]
        }
    };
}

export async function getStaticPaths() {
    const profile_res = await fetch(`${API_URL}/profiles?_limit=-1`);
    const profiles = await profile_res.json();

    return {
        paths: profiles.map((el) => ({
            params: { slug: String(el.slug) }
        })),
        fallback: false
    };
}

export default Profile;
