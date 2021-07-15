import React, { useState, useEffect } from 'react';


let logoutTimer;

const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    id: '',
    center_id: '',

    login: (token) => { },
    logout: () => { }

});

const calcualteRemainingTime = (expTime) => {
    const currentTime = new Date().getTime();
    const adjExperationTime = new Date(expTime).getTime()

    const remainingDuration = adjExperationTime - currentTime;

    return remainingDuration
}

const retrieveStoredToken = () => {
    const storedToken = localStorage.getItem('token');
    const storedExperationDate = localStorage.getItem('experationTime')

    const remainingTime = calcualteRemainingTime(storedExperationDate)

    if (remainingTime <= 60000) {
        localStorage.removeItem('token');
        localStorage.removeItem('experationTime');
        return null
    }

    return {
        token: storedToken,
        duration: remainingTime
    }
}

export const AuthContextProvider = (props) => {
    const tokenData = retrieveStoredToken()

    let initialToken;
    if (tokenData) {
        initialToken = tokenData.token
    }
    const [token, setToken] = useState(initialToken);
    const [id, setId] = useState()
    const [centerId, setCenterId] = useState()

    const userIsLoggedIn = !!token;


    const logoutHandler = () => {
        setToken(null)
        localStorage.removeItem('token')
        localStorage.removeItem('experationTime')


        if (logoutTimer) {
            clearTimeout(logoutTimer);
        }
    }




    useEffect(() => {
        if (tokenData) {
            //console.log(tokenData.duration)
            logoutTimer = setTimeout(logoutHandler, tokenData.duration)
            verifyCredentials(token)
        }

    }, [])

    const verifyCredentials = async (token) => {
        //console.log(token)
        await fetch('http://localhost:3001/api/auth/checktoken', {
            method: "POST",
            body: JSON.stringify({
                token: token
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (res.ok) {
                    //console.log(res)
                    return res.json()

                } else {
                    res.json().then(data => {
                        let errorMessage = 'Token Failed!'
                        //console.log(data)
                        alert(errorMessage)
                        throw new Error(errorMessage)
                    })
                }
            }).then((data) => {
                console.log(data.verify)
                const id = data.verify.id
                const centerId = data.verify.center_id
                //const experationTime = new Date(new Date().getTime() + (+data.expiresIn * 1000))
                setId(id)
                setCenterId(centerId)

            })
    }

    const loginHandler = (token) => {
        const experationTime = 7200
        setToken(token)
        localStorage.setItem('token', token)
        localStorage.setItem('experationTime', experationTime)

        const remainingTime = calcualteRemainingTime(experationTime);

        logoutTimer = setTimeout(logoutHandler, remainingTime)
        verifyCredentials(token)
    }
    // useEffect(() => {
    //     verifyCredentials(token)
    // }, [])

    const contextValue = {
        token: token,
        id: id,
        center_id: centerId,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    }

    return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
}

export default AuthContext