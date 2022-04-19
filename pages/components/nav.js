import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import styles from '../../styles/Nav.module.css'
import {useRouter} from 'next/router'

function Nav() {

  const [icons, setIcons] = useState([{
    icon: '/none.png',
    title: '|',
    destination: '|'
  }])

  const router = useRouter()
  const route = destination => {
    router.push(destination)
  }
  
  useEffect(() => {
    let icons = [
      {
        icon: '/home.svg',
        title: 'Home',
        destination: '/'
      },
      {
        icon: '/profile.png',
        title: 'Profile',
        destination: '/profile'
      },
      {
        icon: '/test.svg',
        title: 'Test',
        destination: '/test'
      },
      {
        icon: '/chat.svg',
        title: 'Chat',
        destination: '/chat'
      },
      {
        icon: '/pin.svg',
        title: 'Pinned',
        destination: '/pinned'
      },
      {
        icon: '/Settings.svg',
        title: 'Settings',
        destination: '/settings'
      }
    ]
    let iconsCleaned = []
    for (let i = 0; i < icons.length; i++) {
      if (i == localStorage.getItem('position')) {
        // nothing
      } else {
        iconsCleaned.push(icons[i])
      }
    }
    setIcons(iconsCleaned)
  }, [])

  

  return (
    <div className={styles.page}>
      {icons.map(icon => 
        <span className='flex' style={{width: '150px', justifyContent: 'space-evenly'}} onClick={() => {route(icon.destination)}}>
          <Image width={25} height={25} src={icon.icon} alt={icon.title} className={styles.icon} />
          {icon.title}
        </span>
      )}
      <div className='flex' style={{width: '60%', justifyContent: 'space-evenly'}}>
        <Image width={25} height={25} src='/facebook.png' onClick={() => {route('/')}} alt='Facebook' />
        <Image width={25} height={25} src='/instagram.png' onClick={() => {route('/')}} alt='Instagram' />
        <Image width={25} height={25} src='/linkedin.png' onClick={() => {route('/')}} alt='LinkedIn' />
        <Image width={25} height={25} src='/tik-tok.png' onClick={() => {route('/')}} alt='Tiktok' />
        <Image width={25} height={25} src='/youtube.png' onClick={() => {route('/')}} alt='YouTube' />
      </div>
    </div>
  )
}

export default Nav