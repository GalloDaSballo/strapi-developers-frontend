import { useState, useEffect, useMemo } from 'react';
import Head from 'next/head';
import Masthead from '../components/Masthead';
import Profiles from '../components/Profiles';
import Tags from '../components/Tags';

import { API_URL } from '../utils/urls';
import { Profile, Tag } from '../types';


const useActiveTagsAndProfiles = (profiles, tags):  {activeTags: Tag[],  toggleTag: (tag: Tag) => void, activeProfiles: Profile[]} => {
    const [activeTags, setActiveTags] = useState([]);

    useEffect(() => {
        setActiveTags([]);
    }, [tags]);

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

    const activeProfiles = useMemo(() => {
        try {
            if (activeTags.length) {
                console.log('activeTags', activeTags);
                return profiles.filter(
                    (profile) =>
                        profile.skills && profile.skills.some((r) => activeTags.includes(r.label))
                );
            }
        } catch (err) {
            console.log('Exception in tag filtering');
        }

        return profiles;
    }, [activeTags]);

    return { activeTags, toggleTag, activeProfiles };
};

const Home: React.FC<{profiles: Profile[], tags: Tag[]}> = ({ profiles, tags }) => {
    const { activeTags, toggleTag, activeProfiles } = useActiveTagsAndProfiles(profiles, tags);

    return (
        <>
            <Head>
                <title>Strapi Developers</title>
            </Head>
            <Masthead />
            <Tags tags={tags} activeTags={activeTags} toggleTag={toggleTag} />
            <Profiles profiles={activeProfiles} />
        </>
    );
}

export async function getStaticProps() {
    const profile_res = await fetch(`${API_URL}/profiles?_limit=-1`);
    const profiles: Profile[] = await profile_res.json();

    //Pseudorandom Thanks to: https://stackoverflow.com/a/46545530
    const shuffled = profiles
        .map((a) => ({ sort: Math.random(), value: a }))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value);
    const tag_res = await fetch(`${API_URL}/tags?_limit=-1`);
    const tags: Tag[] = await tag_res.json();

    return {
        props: {
            profiles: shuffled,
            tags
        }
    };
}

export default Home