import { useState } from 'react'
import DashHeader from './hamburger'
import Loader from './loader'
import { getFirestore, query, getDocs, collection, where } from 'firebase/firestore'
import Home from './home'

const firebaseApp = {
    apiKey: "AIzaSyDSvZthbh3Dv_05OPwOSq95OysJtjLxCC0",
    authDomain: "tect-9a6d5.firebaseapp.com",
    projectId: "tect-9a6d5",
    storageBucket: "tect-9a6d5.appspot.com",
    messagingSenderId: "829811469850",
    appId: "1:829811469850:web:9fcb04a0011d61753d2ba3",
    measurementId: "G-N4WMVKMBLL"
}
const firestore = getFirestore()

function Dashboard(props) {

    const [data, setData] = useState("")
    
    const find = async () => {
        const person = query(
            collection(firestore, "users"),
            where ("email", "==", localStorage.email)
        )
        const personSnap = await getDocs(person);
        const personal = personSnap.forEach(async snap => {
            setData(snap.data())
        })
        if (!data.length) {
            const org = query(
                collection(firestore, "orgs"),
                where ("email", "==", localStorage.email)
            )
            const orgSnap = await getDocs(org);
            const orgal = orgSnap.forEach( snap => {
                setData(snap.data())
            })
        }
    }
    find()

    if (data) {
        return (
            <>
                <title> Acies| Home</title>
                <Home data={data}/>
            </>
        )
    } else {
        return (
            <Loader />
        )
    }
}

export default Dashboard

        