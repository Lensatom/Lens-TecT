import React from 'react'
import CreateOrg from './loginPage/createOrg'
import CreateUser from './loginPage/createUser'
import ForgotPassword from './forgotPassword'
import LoginUser from './loginPage/loginUser'
import LoginOrg from './loginPage/loginOrg'
import Chat from './chat'
import Profile from './profile'
import Home from './home'
import Search from './search'
import About from './loginPage/about'
import Dashboard from './fetcher'
import Hamburger from './hamburger'

function Manager({i, info}) {
  const components = {
    0: <LoginUser info={info} />,
    1: <LoginOrg info={info} />,
    2: <CreateUser info={info} />,
    3: <CreateOrg info={info} />,
    4: <ForgotPassword info={info} />,
    5: <About info={info} />,
    6: <Home info={info} />,
    // 7: <Messaging info={props.info} />,
    8: <Profile info={info} />,
    // 9: <Test info={props.info} />,
    // 10: <Notification info={props.info} />,
    // 11: <Setting info={props.info} />,
    12: <Search info={info} />,
    // 13: <Upcoming info={props.info} />,
    // 14: <Pinned info={props.info} />,
    15: <Hamburger info={info} />,
    16: <Dashboard info={info} />
  }  

  return (
    components[i]
  )
} 


export default Manager