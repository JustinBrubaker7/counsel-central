import React from 'react'
import Title from '../Title/Title'

const ResidentInfo = ({ resident }) => {
    return (
        <>
            <Title title={resident.resident_firstName + " " + resident.resident_lastName} />
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt='user' className="h-56 w-auto"></img>
            <div className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200 float-right">
                <div className="px-4 py-5 sm:px-6">
                    <h2 className="text-xl">Info</h2>
                </div>
                <div className="px-4 py-5 sm:p-6">
                    <div>
                        {"Age: " + resident.age}
                    </div>
                    <div>
                        {"DOB: " + resident.DOB}
                    </div>
                    <div>
                        {"Yeasr Using: " + resident.years_used}
                    </div>


                </div>
            </div>
        </>
    )
}

export default ResidentInfo
