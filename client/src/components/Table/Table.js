import React, { useState, useEffect, useContext } from 'react';
import API from '../../utils/API'
import Moment from 'moment'


import AuthContext from '../../context/auth-context'

export default function Table() {
    const authCtx = useContext(AuthContext)

    const [residents, setResidents] = useState([])

    async function fetchResidentHandler(id) {
        const getData = await API.getResidents(id)
        const data = await getData.data
        console.log(data)
        setResidents(data)

    }

    useEffect(() => {
        fetchResidentHandler(authCtx.center_id)
    }, [authCtx])






    return (
        <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-prussian">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-4 py-3 text-left text-sm font-medium text-white uppercase tracking-wider"
                                    >
                                        Name
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-4 py-3 text-left text-sm font-medium text-white uppercase tracking-wider"
                                    >
                                        Age
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-4 py-3 text-left text-sm font-medium text-white uppercase tracking-wider"
                                    >
                                        Gender
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-4 py-3 text-left text-sm font-medium text-white uppercase tracking-wider"
                                    >
                                        Counselor
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-4 py-3 text-left text-sm font-medium text-white uppercase tracking-wider"
                                    >
                                        Length in program
                                    </th>
                                    <th scope="col" className="relative px-6 py-3">
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {residents.map((resident) => (
                                    <tr key={resident.id} className='bg-white'>

                                        <td className="px-4 py-4 whitespace-nowrap text-md font-medium text-gray-900">{resident.resident_firstName + " " + resident.resident_lastName}</td>
                                        <td className="px-4 py-4 whitespace-nowrap text-md text-gray-500">{resident.age}</td>
                                        <td className="px-4 py-4 whitespace-nowrap text-md text-gray-500">{resident.gender}</td>
                                        <td className="px-4 py-4 whitespace-nowrap text-md text-gray-500">{resident.counselor.name ? resident.counselor.name : "no counselor"}</td>
                                        <td className="px-4 py-4 whitespace-nowrap text-md text-gray-500">{Moment(resident.createdAt, "YYYY-MM-DD").fromNow()}</td>
                                        <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <a href="#" className="text-prussian hover:text-prussian">
                                                Add Comment
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div >
    )
}
