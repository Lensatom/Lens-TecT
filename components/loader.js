import React from 'react'
import Image from "next/image"
import styles from '../styles/Loader.module.css'

function Loader() {
    
    return (
        <div className={styles.load}>
            <title> TecT - Loading... </title>
            <Image src="/Rhombus.gif" alt="Loading" width={20} height={20} />
            <p className='styles.text'> Please wait </p>
        </div>
    )
}

export default Loader
