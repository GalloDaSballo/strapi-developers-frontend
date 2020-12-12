import styles from '../styles/Tags.module.css'

export default function Tag ({tag, active, toggleTag}) {

    return (  
        <>
            {active && 
                <div 
                    className={styles.tags_item_active} 
                    onClick={() => toggleTag(tag)}
                    key={tag.label}
                >
                    {tag.label}
                </div>
            }
            {!active && 
                <div 
                    className={styles.tags_item} 
                    onClick={() => toggleTag(tag)}
                    key={tag.label}
                >
                    {tag.label}
                </div>
            }
        </>
    )
}