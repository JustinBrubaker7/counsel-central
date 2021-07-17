import React, { useContext, useEffect } from 'react'
import AuthContext from "../../context/auth-context"
import { useHistory } from 'react-router-dom'

const Logout = () => {

    const authCtx = useContext(AuthContext)
    let history = useHistory();


    useEffect(() => {
        authCtx.logout()
        history.replace('/')
        window.location.reload({ forcedReload: true });
    }, [])

    return (
        <div>

        </div>
    )
}

export default Logout
