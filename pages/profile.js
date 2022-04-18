import React from 'react'
import Image from 'next/image'
import Header from './components/header'
import styles from '../styles/Pages.module.css'
import EditProfile from './components/editProfile'
import Organizations from './components/organizations'
import Emails from './components/emails'

function Profile() {
  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.slideshow}>
        <div className={styles.topData}>
          <div className={styles.topPic}> </div>
          <h2> AYOMIDE ATAYERO </h2>
          <span style={{marginTop: '-30px'}}> ~@ayomidetommiwagmail </span>
          <span style={{marginTop: '-10px'}} className ='small'> 10 Followers &#9825; 11 Following </span>
        </div>
        <div className={styles.collection}>
          <Image src='/share.svg' width={22} height={22} />
          <Image src='/barchat.svg' width={22} height={22} />
          <Image src='/doc.svg' width={22} height={22} />
          <Image src='/wallet.svg' width={22} height={22} />
        </div>
        <div style={{marginTop: '50px', width: '100%'}}>
          <EditProfile />
          <Emails />
          <Organizations />
        </div>
      </div>
    </div>
  )
}

export default Profile