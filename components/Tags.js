import styles from '../styles/Tags.module.css';
import Tag from '../components/Tag';

export default function Tags({ tags, activeTags, toggleTag }) {
    /**
     * Given a tag return whether the tag is active or not
     * @param {any} tag
     */
    const isTagActive = (tag) => {
        let t = activeTags.find((item) => item === tag.label);
        if (t) return true;
        else return false;
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
