import { search } from 'fontawesome'
import React, { useState } from 'react'
import styles from '../../styles/EditProfile.module.css'

function Emails() {

  const [data, setData] = useState([])
  const [dropDown, setDropDown] = useState(<>&#916;</>)

  const getOrRemoveUserData = () => {
    if (data.length > 0){
      setData([])
      setDropDown(<>&#916;</>)
    } else {
      const info = ['', 'ayomidetommiwa@gmail.com', 'ayomideatayero9@gmail.com']
      const keys = Object.keys(info)
      let listed = []
      for (let i = 1; i < keys.length; i++) {
        listed.push({title: keys[i], value: info[keys[i]]});
      }
      setData(listed)
      setDropDown(<>&#8711;</>)
    }
  }

  return (
    <div className={styles.page}>
      <span className='flex'> 
        <b> Emails </b>
        <span className='small' onClick={getOrRemoveUserData}> {dropDown} </span>
      </span>
      {data.map(d => 
        <span className='flex' style={{marginTop: '20px'}} key={d['title']}>
          <span> {d['title']} </span>
          <span style={{color: 'grey', textAlign: 'right'}}> {d['value']} </span>
          <span> X </span>
        </span>
      )}   
    </div>
  )
}

export default Emails