import styles from '../styles/Tags.module.css';
import { useState } from 'react';
import Tag from '../components/Tag';

export default function Tags({ tags }) {
    const [activeTags, setActiveTags] = useState(['all tags']);

    /**
     * Given a tag return whether the tag is active or not
     * @param {any} tag
     */
    const isTagActive = (tag) => {
        console.log('activeTags', activeTags);
        let t = activeTags.find((item) => item === tag.label);
        if (t) return true;
        else return false;
    };

    /**
     * Given a tag activates it if it was inactive, deactiveded if it was active
     * @param {any} tag
     */
    const toggleTag = (tag) => {
        let found = activeTags.find((item) => item === tag.label);
        if (found) {
            let newTags = [...activeTags]; // Copia
            newTags = newTags.filter((item) => item !== tag.label);
            setActiveTags(newTags);
        } else {
            const newTags = [...activeTags]; // Copia
            newTags.push(tag.label);
            setActiveTags(newTags);
        }
    };

    return (
        <div className={styles.container}>
            <h1>Find Developer</h1>
            <h4>Select tags to filter your search and find and hire a remote developer</h4>
            <div className={styles.tags}>
                {tags.map((tag) => (
                    <Tag key={tag} tag={tag} active={isTagActive(tag)} toggleTag={toggleTag} />
                ))}
            </div>
        </div>
    );
}
