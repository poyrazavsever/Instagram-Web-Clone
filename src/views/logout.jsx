import { useEffect } from "react"
import {Navigate} from "react-router-dom"
import {logout} from "../firebase"

function Logout() {
    useEffect(() => {
        logout()
    })

    return null
}

export default Logout