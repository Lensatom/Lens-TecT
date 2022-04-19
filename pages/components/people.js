import React from 'react'
import chat from '../../styles/Chat.module.css'

function People() {

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

  return (
    <>
      {messagers.map(message => 
        <div className={chat.person}>
          <div className={chat.pic}></div>
          <div className={chat.preview} style={{marginLeft: '15px'}}>
            <span className='large' style={{marginBottom: '-10px'}}> {message.name} </span> <br />
            <span className='medium'> {message.preview} </span>
          </div>
          <div className={chat.preview}>
            <span className='small' style={{marginBottom: '-10px'}}> {message.time} </span> <br />
            <span className='small'> {message.status} </span>
          </div>
        </div>
      )}
    </>
  )
}

export default People