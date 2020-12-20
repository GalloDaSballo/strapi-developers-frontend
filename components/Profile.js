import styles from '../styles/Profile.module.css'
import { fromImageToUrl, API_URL } from '../utils/urls'
import Link from 'next/link'

export default function Profile ({imageUrl, name, title, location, skills, online, slug}) {
  
    console.log('profilo', imageUrl, name, location, skills, online)

    return(
        <>
            <div className={styles.container}>
                <div className={styles.img_profile} style={{backgroundImage: `url(${fromImageToUrl(imageUrl)})`}}/>
                <h3>{name}</h3>
                <p>{title}</p>
                <p>{location}</p>
                <div className={styles.skills}>
                    {
                        skills.map(skill => (
                            <div className={styles.skill_item}>{skill.label}</div>
                        ))
                    }
                </div>
                <Link href={`/profiles/${slug}`}>
                    <a>
                        <button className={styles.available}>Available Now</button>
                    </a>
                </Link>
                {/* {
                    online === true 
                    ? <p className={styles.online_text}>Online</p>
                    : <p>Last seen {online}h ago</p>
                } */}
            </div>
        </>
    )
}