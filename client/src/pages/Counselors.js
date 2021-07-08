import React, { useState, useEffect } from 'react'
import Title from '../components/Title/Title'
import CounselorCard from '../components/CounselorCard/CounselorCard'
import API from '../utils/API'


const Counselors = () => {

    const [counselors, setCounselors] = useState([])

    useEffect(() => {
        fetchCounselorsHandler(1)
    }, [])

    async function fetchCounselorsHandler(id) {
        const getData = await API.getCounselors(id)
        const data = getData.data
        setCounselors(data)
    }

    return (
        <div>
            <Title title={"Counselors"} />
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {counselors.map((person) => (
                    <CounselorCard key={person.email} person={person} />
                ))}
            </ul>
        </div>
    )
}

export default Counselors
