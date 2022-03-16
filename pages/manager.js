import React from 'react'
import CreateOrg from '../components/loginPage/createOrg'
import CreateUser from '../components/loginPage/createUser'
import ForgotPassword from '../components/forgotPassword'
import LoginUser from '../components/loginPage/loginUser'
import LoginOrg from '../components/loginPage/loginOrg'
import Chat from '../components/chat'
import Profile from '../components/profile'
import Home from '../components/home'
import Search from '../components/search'
import About from '../components/loginPage/about'
import Dashboard from '../components/me'

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
    // 15: <Hamburger info={props.info} />
    16: <Dashboard info={info} />
  }  

  return (
    components[i]
  )
} 


export default Manager