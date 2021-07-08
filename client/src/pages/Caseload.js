import React, { useState, useEffect } from 'react'
import CaseloadCard from '../components/CaseloadCard/CaseloadCard'
import Title from '../components/Title/Title'

const Caseload = () => {

    const [residents, setResidents] = useState([])

    useEffect(() => {
        fetchCasloadHandler()
        console.log('loading/..')
    }, [])

    async function fetchCasloadHandler() {
        const response = await fetch('http://localhost:3001/api/get/resident');
        const data = await response.json()

        console.log(data)
        setResidents(data)
    }


    return (
        <div>
            <Title title={"Caseload"} />
            <CaseloadCard residents={residents} />

        </div>
    )
}

export default Caseload
