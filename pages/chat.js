import React, {useEffect} from 'react'
import styles from '../styles/Pages.module.css'
import chat from '../styles/Chat.module.css'
import Header from './components/header'
import ChatNav from './components/chatNav'

const messagers = [
  {
    name: 'Setemi Kolawole',
    time: '1AM',
    status: 'unread',
    preview: 'Hi Ayomide, Can you...'
  },
  {
    name: 'Alfred Ijoko',
    time: '12AM',
    status: 'unread',
    preview: 'I hope you are ready for...'
  },
  {
    name: 'Aishat Odunuga',
    time: '12AM',
    status: 'unread',
    preview: 'Hello! Sup?'
  },
  {
    name: 'Aishat Odunuga',
    time: '12AM',
    status: 'unread',
    preview: 'Hello! Sup?'
  },
  {
    name: 'Aishat Odunuga',
    time: '12AM',
    status: 'unread',
    preview: 'Hello! Sup?'
  },
  {
    name: 'Aishat Odunuga',
    time: '12AM',
    status: 'unread',
    preview: 'Hello! Sup?'
  },
  {
    name: 'Aishat Odunuga',
    time: '12AM',
    status: 'unread',
    preview: 'Hello! Sup?'
  },
  {
    name: 'Aishat Odunuga',
    time: '12AM',
    status: 'unread',
    preview: 'Hello! Sup?'
  },
  {
    name: 'Aishat Odunuga',
    time: '12AM',
    status: 'unread',
    preview: 'Hello! Sup?'
  },
  {
    name: 'Aishat Odunuga',
    time: '12AM',
    status: 'unread',
    preview: 'Hello! Sup?'
  }
]

function Chat() {

  useEffect(() => {
    localStorage.setItem('position', 3)
  }, [])

  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.slideshow}>
        <ChatNav />
      </div>
    </div>
  )
}

export default Chat