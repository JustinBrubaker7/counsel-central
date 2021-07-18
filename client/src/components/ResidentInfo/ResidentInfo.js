import React, { useState, useEffect } from 'react'

import Divider from '../Divider/Divider'
import SessionList from '../SessionList/SessionList'
import Timeline from '../Timeline/Timeline'
import TitleButtons from '../TitleButtons/TitleButtons'
import API from '../../utils/API'

//route to get a residents 
//pass it down to the list component
// loop through and show date and a preview of the note



const ResidentInfo = ({ resident, notes }) => {


    console.log(notes)
    return (
        <>
            <div>
                <TitleButtons title={resident.resident_firstName + " " + resident.resident_lastName} button1Name={"Reassign Resident"} button2Name={"Add Note"} button2Link={"/notes"} />
            </div>
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt='user' className="h-56 w-auto float-left mr-12 rounded shadow-sm" />
            <div className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200 ">
                <div className="px-4 py-5 sm:px-6">
                    <h2 className="text-xl font-bold">Info</h2>
                </div>
                <div className="px-4 py-5 sm:p-6">
                    <p>
                        {"Age: " + resident.age}
                    </p>
                    <p>
                        {"DOB: " + resident.DOB}
                    </p>
                    <p>
                        {"Years Using: " + resident.years_used}
                    </p>
                    <p>
                        {"Gender: " + resident.gender}
                    </p>
                    <p>
                        {"Drug of Choice: " + resident.drug_choice}
                    </p>


                </div>
            </div>
            <Divider className="mt-12" name="Timeline" />


            <div className="grid grid-cols-2 gap-2">
                {/* <div className="relative w-96 h-96 p-12 border p-12 bg-white rounded-md shadow-sm mt-4">
                    <div className="absolute inset-y-2 left-1 m-2">
                        <h2 className="text-xl font-bold">Session Notes</h2>
                        <SessionList />
                    </div>
                </div> */}

                <div className="my-auto px-4 p-12 sm:px-6 lg:px-8 border bg-white rounded-md shadow-sm mt-4">
                    <SessionList notes={notes} />
                </div>
                <div className="mx-auto my-auto px-4 p-12 sm:px-6 lg:px-8 border bg-white rounded-md shadow-sm mt-4">
                    <Timeline />
                </div>

            </div>
        </>
    )
}

export default ResidentInfo
