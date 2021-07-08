import React, { useState, useEffect } from 'react'
import CaseloadCard from '../components/CaseloadCard/CaseloadCard'
import Title from '../components/Title/Title'


const Caseload = () => {

    const [residents, setResidents] = useState([])

    useEffect(() => {
        fetchCasloadHandler(1)
    }, [])

    async function fetchCasloadHandler(id) {
        const response = await fetch(`http://localhost:3001/api/get/counselor-residents/${id}`);
        const data = await response.json()
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
