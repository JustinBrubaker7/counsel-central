import React, { useState, useEffect } from 'react'
import Title from '../components/Title/Title'
import CounselorCard from '../components/CounselorCard/CounselorCard'


const Counselors = () => {

    // const [counselors, setResidents] = useState([])

    // useEffect(() => {
    //     fetchCasloadHandler()
    //     console.log('loading/..')
    // }, [])

    // async function fetchCasloadHandler() {
    //     const response = await fetch('http://localhost:3001/api/get/counselor');
    //     const data = await response.json()

    //     console.log(data)
    //     setResidents(data)
    // }

    return (
        <div>
            <Title title={"Counselors"} />
            <CounselorCard />
        </div>
    )
}

export default Counselors
