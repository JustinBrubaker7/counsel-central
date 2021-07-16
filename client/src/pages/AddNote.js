import React, { useState, useEffect, useContext } from "react";
import API from '../utils/API'


import AuthContext from "../context/auth-context";

const Caseload = () => {
  const authCtx = useContext(AuthContext)

  const [residents, setResidents] = useState([])

  async function fetchResidentHandler(id) {
    const getData = await API.getResidents(id)
    const data = await getData.data
    setResidents(data)
  }

  useEffect(() => {
    fetchResidentHandler(authCtx.center_id)
  }, [authCtx])





  return (
    <>
      <div className="max-w-5xl mx-auto bg-white p-12 rounded-md shadow-sm m-6">
        <form className="space-y-8 divide-y divide-gray-200" method="POST">
          <div className="">
            <div>
              <div>
                <h2 className="text-xl leading-6 font-medium text-gray-900">
                  Add a Session for Your Resident
                </h2>
                <p className="mt-1 text-sm text-gray-500"></p>
              </div>
            </div>
            <div className="space-y-8 divide-y divide-gray-200">
              <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 ">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="first_name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Select a Resident
                  </label>
                  <div className="mt-1">
                    <select
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    // ref={residentRef}
                    >
                      {residents.map((resident) => (
                        <option key={resident.id}>
                          {resident.resident_firstName +
                            " " +
                            resident.resident_lastName}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="date"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Date
                  </label>
                  <div className="mt-1">
                    <input
                      // ref={dateRef}
                      type="date"
                      name="date"
                      id="date"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <h2 className="text-xl leading-6 font-medium text-gray-900 pt-6">
              Notes
            </h2>
          </div>
          <textarea
            //ref={notesRef}
            type="text"
            name="notes"
            id="notes"
            className="shadow-sm rounded-md mt-1 text-md text-gray-900 w-full h-60"
          >
            Provide the notes you want to add.
          </textarea>
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
                Add Note
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Caseload;
