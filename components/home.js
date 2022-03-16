import React, {useState} from 'react'
import Image from 'next/image'
import styles from '../styles/Pages.module.css'
import Manager from '../pages/manager'

function Home(props) {
    let data = props.data
    const [luggage, setLug] = useState()

    if (luggage) {
        return <Manager i={luggage[0]} info={luggage[1]} />
    }
    return (
        <div className={styles.page}>
            <div className={styles.header}> 
                <Image className={styles.list} src="/more.png" width={20} height={20} onClick={ () => setLug([15, data])} />
                <span className={styles.name}> {data.firstName} </span>
                <Image className={styles.list} src="/search.png" width={20} height={20} />
            </div>
            <div className={styles.slideshow}>  </div>
        </div>
    )
}

export default Home
