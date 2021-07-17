import React from 'react'

const TitleButtons = ({ title }) => {
    return (
        <div className="md:flex md:items-center md:justify-between my-5">
            <div className="flex-1 min-w-0">
                <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">{title}</h2>
            </div>
            <div className="mt-4 flex md:mt-0 md:ml-4">
                <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Reassign Resident
                </button>
                <button
                    type="button"
                    className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-usa hover:bg-usa focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    <a href="/notes">
                        add note
                    </a>
                </button>
            </div>
        </div>
    )
}

export default TitleButtons
