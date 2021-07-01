import React from 'react'

const AddCouselorForm = () => {
    return (
        <>
        <div className="max-w-5xl mx-auto bg-white p-12 rounded-md shadow-sm m-6">
        <form className="space-y-8 divide-y divide-gray-200" method="POST">
        <div className="">
          <div>
            <div>
              <h2 className="text-xl leading-6 font-medium text-gray-900">Add a new couselor</h2>
              <p className="mt-1 text-sm text-gray-500">
                Join as many couselors as you like to your center. They will recieve an invitation to join with the email you provide below.
              </p>
            </div>
          </div>
          <div>
              <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="given-name"
                    className="shadow-sm focus:ring-honolulu focus:border-honolulu block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="shadow-sm focus:ring-honolulu focus:border-honolulu block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
          </div>                 
        <div className="pt-5">
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-honolulu hover:bg-honolulu-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add Couselor
            </button>
          </div>
        </div>
      </form>
        </div>

     
        </>
    )
}

export default AddCouselorForm
