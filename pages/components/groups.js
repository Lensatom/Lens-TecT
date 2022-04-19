import React from 'react'
import chat from '../../styles/Chat.module.css'

function Groups() {

  const messagers = [
    {
      name: 'Achievers Group',
      status: 'unread',
      time: '10AM',
      preview: '@ayomidetommiwagmail: Good after...'
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

export default Groups