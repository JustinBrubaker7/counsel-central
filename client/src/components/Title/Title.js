import React from 'react'

const Title = ({ title }) => {
    return (
        <>
            <div className="flex-1 min-w-0 mb-5">
                <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate p-3">{title}</h2>
            </div>
        </>
    )
}

export default Title
