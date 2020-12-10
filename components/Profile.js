import styles from '../styles/Profile.module.css'

export default function Profile ({imageUrl, name, location, skills, online}) {
  
    console.log('profilo', imageUrl, name, location, skills, online)

    return(
        <>
            <div className={styles.container}>
                <div className={styles.img_profile} style={{backgroundImage: `url(${imageUrl})`}}/>
                <h3>{name}</h3>
                <p>{location}</p>
                <div className={styles.skills}>
                    {
                        skills.map(skill => (
                            <div className={styles.skill_item}>{skill}</div>
                        ))
                    }
                </div>
                <button className={styles.available}>Available Now</button>
                {
                    online === true 
                    ? <p className={styles.online_text}>Online</p>
                    : <p>Last seen {online}h ago</p>
                }
            </div>
        </>
    )
}