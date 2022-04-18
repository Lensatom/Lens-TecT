import React, { useState } from 'react'
import styles from '../../styles/EditProfile.module.css'

function  Organizations() {

  const [data, setData] = useState([])
  const [dropDown, setDropDown] = useState(<>&#916;</>)

  const getOrRemoveUserData = () => {
    if (data.length > 0){
      setData([])
      setDropDown(<>&#916;</>)
    } else {
      const info = {
        'First Name': 'Ayomide',
        'Middle Name': 'Samuel',
        'Last Name': 'Atayero',
        'Gender': 'Male',
        'Date Of Birth': 'June 20 2004',
      }
      const keys = Object.keys(info)
      let listed = []
      for (let i = 0; i < keys.length; i++) {
        listed.push({title: keys[i], value: info[keys[i]]});
      }
      setData(listed)
      setDropDown(<>&#8711;</>)
    }
  }

  return (
    <div className={styles.page}>
      <span className='flex'> 
        <b> User Information </b>
        <span className='small' onClick={getOrRemoveUserData}> {dropDown} </span>
      </span>
      {data.map(d => 
        <span className='flex' style={{marginTop: '20px'}}>
          <span> {d['title']} </span>
          <span style={{color: 'grey', textAlign: 'right'}}> {d['value']} </span>
        </span>
      )}   
    </div>
  )
}

export default Organizations