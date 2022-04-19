import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import styles from '../../styles/Header.module.css'
import Nav from './nav'
import Search from './search'

function Header() {

  const [nav, setNav] = useState()
  const [search, setSearch] = useState()
  const [moreSrc, setMoreSrc] = useState('/more.png')
  const [searchSrc, setSearchSrc] = useState('/search.png')
  const [modeSrc, setModeSrc] = useState('light.svg')

  const updateIcon = live => {
    if (localStorage.getItem('mode') == null) {
      localStorage.setItem('mode', 'light')
    }
    if (localStorage.getItem('mode') == 'light') {
      setModeSrc('/dark.png')
    } else {
      setModeSrc('/light.png')
    }
    if (live == true && localStorage.getItem('mode') == 'light') {
      setSearchSrc('/dark.png')
    } else if (live == true && localStorage.getItem('mode') == 'dark') {
      setSearchSrc('/light.png')
    }
  }
  useEffect(() => {
    updateIcon(false)
  }, [])

  const changeMode = () => {
    if (localStorage.getItem('mode') == 'light') {
      localStorage.setItem('mode', 'dark')
    } else {
      localStorage.setItem('mode', 'light')
    }
    updateIcon(true)
  }

  const displayNav = () => {
    if (moreSrc == '/more.png') {
      setNav(<Nav />)
      setMoreSrc('/close.png')
      setSearchSrc(modeSrc)
    } else {
      setNav('')
      setMoreSrc('/more.png')
      setSearchSrc('/search.png')
    }
  }
  const displaySearch = () => {
    if (searchSrc == '/search.png') {
      setSearch(<Search />)
      setSearchSrc('/close.png')
    } else if (searchSrc == '/light.png' || searchSrc == '/dark.png') {
      changeMode()
    } else {
      setSearch('')
      setSearchSrc('/search.png')
    }
  }

  return (
    <>
      <div className={styles.header} > 
        <Image className={styles.list} src={moreSrc} width={20} height={20} onClick={displayNav} alt='More'/>
        <span className='larger'> Acies </span>
        <Image className={styles.list} src={searchSrc} width={20} height={20} onClick={displaySearch} alt='Search' />
      </div>
      {nav}
      {search}
    </>
  )
}

export default Header