import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import styles from '../styles/Pages.module.css'
import { initializeApp } from 'firebase/app';
import Header from './components/header';

const firebaseApp = initializeApp({
  apiKey: "AIzaSyDSvZthbh3Dv_05OPwOSq95OysJtjLxCC0",
  authDomain: "tect-9a6d5.firebaseapp.com",
  projectId: "tect-9a6d5",
  storageBucket: "tect-9a6d5.appspot.com",
  messagingSenderId: "829811469850",
  appId: "1:829811469850:web:9fcb04a0011d61753d2ba3",
  measurementId: "G-N4WMVKMBLL"
})

function Home(props) {
  const [className, setClassName] = useState([])
  useEffect(() => {

    localStorage.setItem('position', 0)

    let mode = localStorage.getItem('mode')
    if (mode == null) {
      localStorage.setItem('mode', 'light')
    }
    mode = localStorage.getItem('mode')
    if (mode == 'light') {
      setClassName(['lightPage', 'lightAdd', 'lightIcon'])
    } else {
      setClassName(['darkPage', 'darkAdd', 'darkIcon'])
    }
  }, [])

  const data = {
    firstName: 'Atayero'
  }
  const posts = [
    {
      pic: '/facebook.png',
      name: 'Faisal Odunuga',
      time: '10:00AM',
      content: "Hello geys, I'm Faisal and I am new here. Please add me to groups hbehfib jcwndiubjnklrvwrd efnwjodksd sidbqo ",
      comments: 200
    }
  ]
  
  return (
    <div className={className[0]}>
      <div className={styles.slideshow}> 
        {posts.map(post =>
        <div className={styles.post} key={post.name}>
          <div className={styles.title}>
            <img src={post.pic} className={styles.pic} />
            <div className={styles.des}>
              <h2 style={{marginTop: '0px'}}> {post.name} </h2>
              <span style={{marginTop: '-25px'}}> {post.time} </span>
            </div>
          </div>
          <p> {post.content} </p>
          <div className='small flex'>
            <span> {post.comments} Comments </span>
            <div>
              <span> Comment </span>
              <span> Reply </span>
              <span> Pin </span>
              <span> Share </span>
            </div>
          </div>
        </div>
        )}
      </div>
      <div className={className[1]}>
        <Image src='/post.png' width={25} height={25} className={className[2]} />
      </div>
      <Header data={data}/>
    </div>
  )
}

export default Home