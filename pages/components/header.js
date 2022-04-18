import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import styles from '../../styles/Header.module.css'
import Nav from './nav'
import Search from './search'

function Header(props) {
  const data = props.data
  const [nav, setNav] = useState()
  const [search, setSearch] = useState()
  const [moreSrc, setMoreSrc] = useState('/more.png')
  const [searchSrc, setSearchSrc] = useState('/search.png')

  const displayNav = () => {
    if (moreSrc == '/more.png') {
      setNav(<Nav />)
      setMoreSrc('/close.png')
    } else {
      setNav('')
      setMoreSrc('/more.png')
    }
  }
  const displaySearch = () => {
    if (searchSrc == '/search.png') {
      setSearch(<Search />)
      setSearchSrc('/close.png')
    } else {
      setSearch('')
      setSearchSrc('/search.png')
    }
  }

  return (
    <>
      <div className={styles.header} > 
        <Image className={styles.list} src={moreSrc} width={20} height={20} onClick={displayNav} />
        <span className={styles.name}> Atayero </span>
        <Image className={styles.list} src={searchSrc} width={20} height={20} onClick={displaySearch} />
      </div>
      {nav}
      {search}
    </>
  )
}

export default Header