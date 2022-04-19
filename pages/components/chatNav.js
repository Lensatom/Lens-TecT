import React, {useState} from 'react'
import chat from '../../styles/Chat.module.css'
import Groups from './groups'
import People from './people'



function ChatNav() {

  const [rendered, setRendered] = useState(<People />)
  const [peopleStyle, setPeopleStyle] = useState({
    borderBottom: '3px solid white',
    width: '30%',
    textAlign: 'center'
  })
  const [groupStyle, setGroupStyle] = useState({
    width: '30%',
    textAlign: 'center'
  })

  const render = which => {
    if (which == 0) {
      setRendered(<People />)
      setPeopleStyle({
        borderBottom: '3px solid white',
        width: '30%',
        textAlign: 'center'
      })
      setGroupStyle({
        width: '30%',
        textAlign: 'center'
      })
    } else {
      setRendered(<Groups />)
      setPeopleStyle({
        width: '30%',
        textAlign: 'center'
      })
      setGroupStyle({
        borderBottom: '3px solid white',
        width: '30%',
        textAlign: 'center'
      })
    }
  }

  return (
    <>
      <div className={chat.nav}>
        <span onClick={() => {render(0)}} style={peopleStyle}> People </span>
        <span onClick={() => {render(1)}} style={groupStyle}> Groups </span>
      </div>
      {rendered}
      <div className='lightAdd'></div>
    </>
  )
}

export default ChatNav