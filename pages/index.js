import Head from 'next/head';
import Masthead from '../components/Masthead';
import Profiles from '../components/Profiles';
import Tags from '../components/Tags';

import { API_URL } from '../utils/urls';

export default function Home({ profiles, tags }) {
    return (
        <>
            <Head>
                <title>Strapi Developers</title>
            </Head>
            <Masthead />
            <Tags tags={tags} />
            <Profiles profiles={profiles} />
            <div
                style={{
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'center',
                    paddingTop: '50px',
                    paddingBottom: '70px'
                }}>
                <img src="/footer-img.svg" />
            </div>
        </>
    );
}

export async function getStaticProps() {
    const profile_res = await fetch(`${API_URL}/profiles`);
    const profiles = await profile_res.json();

    const tag_res = await fetch(`${API_URL}/tags`);
    const tags = await tag_res.json();

    return {
        props: {
            profiles,
            tags
        }
    };
}
