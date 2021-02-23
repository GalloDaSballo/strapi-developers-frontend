import styles from '../styles/Profile.module.css';
import { fromImageToUrl } from '../utils/urls';
import Link from 'next/link';
import { Image, Tag } from '../types';

const Profile: React.FC<{image: Image; title: string; location: string; skills: Tag[]; slug: string}> = ({ image, title, location, skills, slug }) => {
    return (
        <>
            <div className={styles.container}>
                <div
                    className={styles.img_profile}
                    style={{ backgroundImage: `url(${fromImageToUrl(image)})` }}
                />
                <h3> </h3>
                <p>{title}</p>
                <p>{location}</p>
                <div className={styles.skills}>
                    {skills.map((skill) => (
                        <div key={skill.label} className={styles.skill_item}>
                            {skill.label}
                        </div>
                    ))}
                </div>
                <Link href={`/profiles/${slug}`}>
                    <a>
                        <button className={styles.available}>Available Now</button>
                    </a>
                </Link>
            </div>
        </>
    );
}

export default Profile