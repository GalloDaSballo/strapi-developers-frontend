import styles from '../styles/Tags.module.css';
import { Tag } from '../types';

const SingleTag: React.FC<{tag: Tag, active: boolean, toggleTag: (tag: Tag) => void}> = ({ tag, active, toggleTag }) => {
    return (
        <>
            {active && (
                <div
                    className={styles.tags_item_active}
                    onClick={() => toggleTag(tag)}
                    key={tag.label}>
                    {tag.label}
                </div>
            )}
            {!active && (
                <div className={styles.tags_item} onClick={() => toggleTag(tag)} key={tag.label}>
                    {tag.label}
                </div>
            )}
        </>
    );
}

export default SingleTag;