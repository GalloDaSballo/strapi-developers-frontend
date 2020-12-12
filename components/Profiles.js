import styles from '../styles/Profiles.module.css'
import Profile from '../components/Profile'

export default function Profiles ({profiles}) {
    return (
      <div className={styles.container}>
        {profiles.map(profile => (
          <Profile 
            key={profile.name}
            imageUrl={profile.image} 
            name={profile.name} 
            location={profile.location}  
            skills={profile.skills}  
            online={profile.online} 
            slug={profile.slug}
          />
        ))}
      </div>
    )
}