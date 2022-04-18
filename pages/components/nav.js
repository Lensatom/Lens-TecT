import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import styles from '../../styles/Nav.module.css'
import {useRouter} from 'next/router'

function Nav() {

  const router = useRouter()
  const route = destination => {
    router.push(destination)
  }

  const [modeSrc, setModeSrc] = useState('/light.png')
  const updateIcon = () => {
    let mode = localStorage.getItem('mode')
    if (mode == null) {
      localStorage.setItem('mode', 'light')
    }
    mode = localStorage.getItem('mode')
    if (mode == 'light') {
      setModeSrc('/dark.png')
    } else {
      setModeSrc('/light.png')
    }
  }

  const changeMode = () => {
    if (localStorage.getItem('mode') == 'light') {
      localStorage.setItem('mode', 'dark')
    } else {
      localStorage.setItem('mode', 'light')
    }
    updateIcon()
  }

  return (
    <div className={styles.page}>
      <Image width={25} height={25} src='/home.svg' onClick={() => {route('/')}} />
      <Image width={25} height={25} src='/profile.png' onClick={() => {route('profile')}} />
      <Image width={25} height={25} src='/test.svg' />
      <Image width={25} height={25} src='/chat.svg' />
      <Image width={25} height={25} src='/pin.svg' />
      <Image width={25} height={25} src='/settings.svg' onClick={() => {route('settings')}} />
      <Image width={25} height={25} src={modeSrc} onClick={changeMode} />
    </div>
  )
}

export default Nav