import React, { useState, useEffect } from 'react';

let logoutTimer;

const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,

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
    const userIsLoggedIn = !!token;


    const logoutHandler = () => {
        setToken(null)
        localStorage.removeItem('token')
        localStorage.removeItem('experationTime')


        if (logoutTimer) {
            clearTimeout(logoutTimer);
        }
    }

    const loginHandler = (token) => {
        const experationTime = 7200
        setToken(token)
        localStorage.setItem('token', token)
        localStorage.setItem('experationTime', experationTime)

        const remainingTime = calcualteRemainingTime(experationTime);

        logoutTimer = setTimeout(logoutHandler, remainingTime)
    }

    useEffect(() => {
        if (tokenData) {
            console.log(tokenData.duration)
            logoutTimer = setTimeout(logoutHandler, tokenData.duration)
        }
    }, [tokenData])

    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    }

    return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
}

export default AuthContext