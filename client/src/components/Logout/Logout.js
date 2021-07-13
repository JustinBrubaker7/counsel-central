import React, { useContext, useEffect } from 'react'
import AuthContext from "../../context/auth-context"
import { useHistory } from 'react-router-dom'

const Logout = () => {

    const authCtx = useContext(AuthContext)
    let history = useHistory();


    useEffect(() => {
        history.replace('/')
        authCtx.logout()
        window.location.reload(true);
    }, [])

    return (
        <div>

        </div>
    )
}

export default Logout
