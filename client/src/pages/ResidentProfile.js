import React, { useEffect } from 'react'
import Title from '../components/Title/Title'

import API from '../utils/API'


const ResidentProfile = () => {

    const getResidentIdFromUrl = () =>{
        const pathName = window.location.pathname
        const trimPath = pathName.split('/', 10)
        const residentId = trimPath[2]
        return residentId
    }


    useEffect(() => {
        const residentId = getResidentIdFromUrl()
        API.getResident(residentId)
        console.log(residentId)
    })

    return (
        <div>
            <Title title={"NAME"} />
        </div>
    )
}

export default ResidentProfile
