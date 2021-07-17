import React, { useState, useEffect } from 'react'
import ResidentInfo from '../components/ResidentInfo/ResidentInfo'



import API from '../utils/API'


const ResidentProfile = () => {

    const [resident, setResident] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    const [notes, setNotes] = useState([])

    const getResidentIdFromUrl = () => {
        const pathName = window.location.pathname
        const trimPath = pathName.split('/', 10)
        const residentId = trimPath[2]
        return residentId
    }

    async function fetchResident(id) {
        setIsLoading(true)
        const response = await API.getSingleResident(id)
        setResident(response.data[0])
        setIsLoading(false)
    }

    async function fetchNotes(id) {
        const response = await API.getNotes(id)
        setNotes(response.data)
    }


    useEffect(() => {
        fetchNotes(getResidentIdFromUrl())
        fetchResident(getResidentIdFromUrl())
    }, [])


    return (
        <div>
            {isLoading ? <h1 className="mt-20">Loading....</h1> : <ResidentInfo resident={resident} notes={notes} />}
        </div>
    )
}

export default ResidentProfile
