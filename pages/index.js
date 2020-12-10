import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Masthead from '../components/Masthead'
import Profiles from '../components/Profiles'
import Tags from '../components/Tags'


export default function Home() {
  const profiles = [
    {
      imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      name: 'Rebecca Dimarco',
      location: 'Rome, Italy',
      skills: ['angular', 'python', 'css', 'html', '.net', 'bootstrap'],
      online: true
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      name: 'Rebecca Dimarco',
      location: 'Rome, Italy',
      skills: ['angular', 'python', 'css', 'html', '.net', 'bootstrap'],
      online: 2
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      name: 'Rebecca Dimarco',
      location: 'Rome, Italy',
      skills: ['angular', 'python', 'css', 'html', '.net', 'bootstrap'],
      online: true
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      name: 'Rebecca Dimarco',
      location: 'Rome, Italy',
      skills: ['angular', 'python', 'css', 'html', '.net', 'bootstrap'],
      online: 12
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      name: 'Rebecca Dimarco',
      location: 'Rome, Italy',
      skills: ['angular', 'python', 'css', 'html', '.net', 'bootstrap'],
      online: true
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      name: 'Rebecca Dimarco',
      location: 'Rome, Italy',
      skills: ['angular', 'python', 'css', 'html', '.net', 'bootstrap'],
      online: true
    }
  ]

  const tags = [
    {
      label: 'all tags(825)',
      active: true
    },
    {
      label: 'java(825)',
      active: false
    },
    {
      label: 'angular(825)',
      active: false
    },
    {
      label: 'sql(825)',
      active: false
    },
    {
      label: 'c#(825)',
      active: false
    },
    {
      label: 'c++(825)',
      active: false
    },
    {
      label: 'laravel(825)',
      active: false
    },
    {
      label: 'ux(825)',
      active: false
    },
    {
      label: 'css(825)',
      active: false
    },
    {
      label: 'ui(825)',
      active: false
    },
    {
      label: 'ios(825)',
      active: false
    },
    {
      label: 'devops(825)',
      active: false
    },
    {
      label: 'typescript(825)',
      active: false
    },
    {
      label: 'mongodb(825)',
      active: false
    },
    {
      label: 'kubernetes(825)',
      active: false
    },
    {
      label: 'docker(825)',
      active: false
    }
  ]
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
