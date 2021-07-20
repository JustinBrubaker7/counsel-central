import React, { useState, useEffect, useContext } from 'react'
import Title from '../components/Title/Title'
import Stats from '../components/Stats/Stats'
import API from '../utils/API'
import AuthContext from '../context/auth-context'
//import config from "../config/config"

const Dashboard = () => {
    //console.log(config.url)
    const [residents, setResidents] = useState([])
    const authCtx = useContext(AuthContext)

    useEffect(() => {
        fetchCaseloadHandler(authCtx.center_id)
    }, [authCtx])


    async function fetchCaseloadHandler(id) {
        const response = await fetch(
            `https://calm-plains-23222.herokuapp.com/api/get/center-residents/${id}`
        );
        const data = await response.json();
        setResidents(data);
    }

    return (
        <div>
            <Title title={"Dashboard"} />
            <Stats residents={residents} />
        </div>
    )
}

export default Dashboard
