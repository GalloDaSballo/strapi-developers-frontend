import styles from '../styles/Tags.module.css'
import { useState, useEffect } from 'react'
import Tag from '../components/Tag'

export default function Tags ({tags}) {
    const [activeTags, setActiveTags] = useState(['all tags(825)'])
    
    // useEffect(() => {
    //   setActiveTags([])
    // }, [tags])
    
    const isTagActive = (tag) => {
        console.log('activeTags',activeTags);
        let t = activeTags.find((item) => item === tag.label)
        if(t) return true
        else return false
    }

    const toggleTag = (tag) => {
        let t = activeTags.find((item) => item === tag.label)
        if(t) {
            let newTags = [...activeTags] // Copia
            newTags = newTags.filter((item) => item !== tag.label)
            setActiveTags(newTags)
        }
        else {
            const newTags = [...activeTags] // Copia
            newTags.push(tag.label)
            setActiveTags(newTags)
        }
    }

    return (  
        <div className={styles.container}>
            <h1>Find Developer</h1>
            <h4>Select tags to filter your search and find and hire a remote developer</h4>
            <div className={styles.tags}>
                {tags.map(tag => 
                    <Tag 
                        tag={tag} 
                        active={isTagActive(tag)} 
                        toggleTag={toggleTag}
                    />
                )}
            </div>
        </div>
    )
  }