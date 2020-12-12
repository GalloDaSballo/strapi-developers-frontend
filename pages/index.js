import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Masthead from '../components/Masthead'
import Profiles from '../components/Profiles'
import Tags from '../components/Tags'

import { fromImageToUrl, API_URL } from '../utils/urls'

export default function Home({ profiles, tags }) {

  return (
    <>
    <Head>
        <title>Strapi Developers</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700"></link>
      </Head>
      <Masthead />
      <Tags tags={tags} />
      <Profiles profiles={profiles} />
      <div style={{display: 'flex', width: '100%', justifyContent: 'center', paddingTop: '50px', paddingBottom: '70px'}}>
        <img src="/footer-img.svg" />
      </div>
    </>
  )
}

export async function getStaticProps() {
  const profile_res = await fetch(`${API_URL}/profiles`)
  const profiles = await profile_res.json()

  const tag_res = await fetch(`${API_URL}/tags`)
  const tags = await tag_res.json()

  return {
    props: {
      profiles,
      tags
    }
  }
}
