import React, { useEffect } from 'react'
import styles from '../../styles/Search.module.css'

function Search() {
  useEffect(() => {
    document.getElementsByTagName('input')[0].focus()
  }, [])
  
  return (
    <div className={styles.page}>
      <form className={styles.input}>
        <input placeholder='Search here' className={styles.input} />
      </form>
    </div>
  )
}

export default Search