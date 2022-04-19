import React, { useEffect } from 'react'
import Header from './components/header'
import styles from '../styles/Pages.module.css'

function Settings() {

  useEffect(() => {
    localStorage.setItem('position', 5)
  }, [])

  return (
    <>
      
      <div className={styles.page}>
        <Header />
        <div className={styles.slideshow}>
          <div className={styles.opr}>
            <span> Clear Stats </span>
            <span className='small'>
              Clear your progress, stored on Acies to have a fresh start in
              progress recordeing. This include test scores.
            </span>
          </div>
          <div className={styles.opr}>
            <span> About Acies </span>
            <span className='small'>
              Learn more about Acies by visiting the Acies official website
            </span>
          </div>
          <div className={styles.opr}>
            <span> Connect With Acies </span>
            <span className='small'>
              Follow Acies on different social media platforms
            </span>
          </div>
          <div className={styles.opr}>
            <span> Help </span>
            <span className='small'>
              Do you have problems using Acies? Please conatact a personnel 
              to help you get a hang of it.
            </span>
          </div>
          <div className={styles.opr}>
            <span> Log out </span>
            <span className='small'>
              Log out your account on this device. All your data and progress
              will be saved.  
            </span>
          </div >
          <div className={styles.opr}>
            <span> Delete Account </span>
            <span className='small'>
              Deleting account means removing your account permanently from Acies.
              This will include all progress made as well as all user data.
            </span>
          </div>
          <div className={styles.opr}> Private Policy </div >
        </div>
      </div>
    </>
  )
}

export default Settings