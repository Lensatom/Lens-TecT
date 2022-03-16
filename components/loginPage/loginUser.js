import { useState, useEffect} from 'react'
import Loader from '../loader'
import Image from 'next/image'
import styles from '../../styles/Login.module.css'
import { getFirestore, query, where, updateDoc, getDocs, collection, doc } from 'firebase/firestore'
import Manager from '../../pages/manager'

const firestore = getFirestore()

function LoginUser(props) {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [luggage, setLug] = useState()
  const [error, setError] = useState()
  const [log, setLog] = useState()
  const [src, setSrc] = useState("/more.png")

  const dialog = () => {
    let ham = document.getElementById("ham").getBoundingClientRect();
    let dialog = document.getElementById("dialog")
    let page = document.getElementById("blur").style
    ham = [ham.left, ham.top, ham.width]

    setSrc("/close.png")
    page.filter = "blur(1px) brightness(0.4)"
    dialog.style.display = "flex"
    dialog.style.top = ham[1] - dialog.getBoundingClientRect().height + "px"
    dialog.style.left = ham[0] - dialog.getBoundingClientRect().width / 2 + "px"
    
  }
  const close = () => {
    if (src == "/close.png") {
      setSrc("/more.png")
      document.getElementById("dialog").style.display = "none"
      document.getElementById("blur").style.filter = "none"
    }
  }
  const find = async () => {
    if (localStorage.email && localStorage.code) {
      const person = query(
        collection(firestore, "users"),
        where ("email", "==", localStorage.email, "&&", "code", "==", localStorage.code)
      )
      const personSnap = await getDocs(person)
      const personal = personSnap.forEach(async snap => {
        if (snap.data().code == localStorage.code) {
          setLug([16, []])
        } else {
          setLog(false)
        }
      })  
    } else {
      setLog(false)
    }
  }
  useEffect(() => find())
  
  const emailChange = event => {
    setEmail(event.target.value)
  }
  const passChange = event => {
    setPassword(event.target.value)
  }
  const organization = () => {
    setLug([1, []])
  }
  const forgotPassword = () => {
    setLug([4, []])
  }
  const createUser = () => {
    setLug([2, []])
  }

  const dataCheck = async event => {
    
    event.preventDefault()
    document.getElementById("password").blur()
    document.getElementById("username").blur()

    let code;
    const coding = () => {
      const codes = [["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"], ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]]
      const genCode = codes[0][Math.floor(Math.random() * codes[0].length)] + codes[1][Math.floor(Math.random() * codes[1].length)] + codes[2][Math.floor(Math.random() * codes[2].length)] + codes[0][Math.floor(Math.random() * codes[0].length)] + codes[1][Math.floor(Math.random() * codes[1].length)] + codes[2][Math.floor(Math.random() * codes[2].length)]
      const validCode = query(
          collection(firestore, "users"),
          where("code", "==", genCode)
      )
      if (validCode.length) {
          coding()
      }
      else{
          code = genCode
      }
    }
    coding()

    const person = query(
      collection(firestore, "users"),
      where ("email", "==", email, "&&", "password", "==", password)
    )
    const personSnap = await getDocs(person);
    const personal = personSnap.forEach(async snap => {
      if (snap.data().password == password) {
        const users = doc(firestore, `users/${snap.data().handle}`)
        const coded = await updateDoc (users, {code: code})
        localStorage.setItem("email", email)
        localStorage.setItem("code", code)
        setLug([16, []])
      } else {
          setError("You Provided Unmatching Information")
      }
    })
    setTimeout(() => {setError("")}, 4000)
  }

  if (luggage) {
    return <Manager i={luggage[0]} info={luggage[1]} />
  } else if (log == false) {
    return (
      <>
        <div className={styles.page} id="blur" onClick={close}>
          <title> Acies| login </title>
          <b className={styles.heading}> Acies </b>
          <span className={styles.message}> By Lens </span>
          <form onSubmit={dataCheck} className={styles.form}>
            <label className={styles.label}> Email Address </label>
            <input type="email" value={email} id="username" placeholder="acies@gmail.com" onChange={emailChange} className={styles.input} required/>
            <label className={styles.label}> Password </label>
            <input type="password" value={password} id="password" placeholder="********" onChange={passChange} className={styles.input} required/>
            <span className={styles.error}> {error} </span>
            <div className={styles.div}>
              <button className={styles.button} type="submit" onSubmit={dataCheck} > Log In </button>
              <Image src={src} width={20} height={20} onClick={dialog} id="ham" />
            </div>
          </form>
        </div>
        <div className={styles.dialog} id="dialog">
          <span className={styles.des}> Organization Account </span>
          <span className={styles.aux} onClick={createUser}> Create Account </span>
          <span className={styles.aux} onClick={forgotPassword}> Forgot Password </span>  
        </div>
      </>
    )
  } else {
    return <Loader />
  }
}

export default LoginUser