import React, { useState, useEffect } from 'react'
import ResidentInfo from '../components/ResidentInfo/ResidentInfo'



import API from '../utils/API'


const ResidentProfile = () => {

    const [resident, setResident] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    const getResidentIdFromUrl = () => {
        const pathName = window.location.pathname
        const trimPath = pathName.split('/', 10)
        const residentId = trimPath[2]
        return residentId
    }

    async function fetchResident(id) {
        setIsLoading(true)
        const residentId = getResidentIdFromUrl()
        const response = await API.getSingleResident(residentId)
        //console.log(response.data[0])
        //const data = await response.json()
        setResident(response.data[0])
        setIsLoading(false)
    }


    useEffect(() => {
        fetchResident()

    }, [])

    return (
        <div>
            {isLoading ? <h1 className="mt-20">Loading....</h1> : <ResidentInfo resident={resident} />}
        </div>
    )
}

export default ResidentProfile
