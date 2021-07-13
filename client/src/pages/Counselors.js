import React, { useState, useEffect, useContext } from 'react'
import Title from '../components/Title/Title'
import CounselorCard from '../components/CounselorCard/CounselorCard'
import API from '../utils/API'

import AuthContext from '../context/auth-context'


const Counselors = () => {
    const authCtx = useContext(AuthContext)


    const [counselors, setCounselors] = useState([])

    useEffect(() => {
        fetchCounselorsHandler(authCtx.center_id)
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
