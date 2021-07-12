import React, { useState, useEffect } from 'react'
import Title from '../components/Title/Title'

import API from '../utils/API'


const ResidentProfile = () => {

    const [resident, setResident] = useState({})


    const getResidentIdFromUrl = () =>{
        const pathName = window.location.pathname
        const trimPath = pathName.split('/', 10)
        const residentId = trimPath[2]
        return residentId
    }

    async function fetchResident(id) {
        const residentId = getResidentIdFromUrl()
        const response = await API.getSingleResident(residentId)
        const data = await response.json()
        setResident(data)
    }


    useEffect(() => {
        fetchResident()
        
    }, [])

    return (
        <div>
            <Title title={resident.name} />
        </div>
    )
}

export default ResidentProfile
