import React, { useState, useEffect, useRef, useContext } from "react";
import API from '../utils/API'
import SuccessModal from '../components/SuccessModal/SuccessModal'


import AuthContext from "../context/auth-context";

const NoteNew = () => {
  const authCtx = useContext(AuthContext)

  const residentRef = useRef()
  const dateRef = useRef()
  const notesRef = useRef()


  const [residents, setResidents] = useState([])
  const [success, setSuccess] = useState(false)

  async function fetchResidentHandler(id) {
    const getData = await API.getResidents(id)
    const data = await getData.data
    setResidents(data)
  }

  useEffect(() => {
    fetchResidentHandler(authCtx.center_id)
  }, [authCtx])



  const submitNoteHandler = (event) => {
    event.preventDefault();
    setSuccess(false)
    const enteredResident = residentRef.current.value;
    const enteredDate = dateRef.current.value;
    const enteredNote = notesRef.current.value

    //validation

    fetch('http://localhost:3001/api/note/create', {
      method: 'POST',
      body: JSON.stringify({
        counselor_id: authCtx.id,
        resident_id: enteredResident,
        note: enteredNote,
        date: enteredDate
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      if (res.ok) {
        return res.json()
      } else {
        res.json().then(data => {
          let errorMessage = 'note add faild!'
          console.log(data)
          alert(errorMessage)
          throw new Error(errorMessage)
        })
      }
    }).then((data) => {
      successtimer()

    })

  }

  const successtimer = () => {
    setSuccess(true)
    setTimeout(function () { setSuccess(false) }, 4000);
  }


  return (
    <>
      <div className="max-w-5xl mx-auto bg-white p-12 rounded-md shadow-sm m-6">
        {success && <SuccessModal title={"Successfully saved!"} subtitle={"The note was added and you can now view in resident profile."} className="mt-12" />}
        <form className="space-y-8 divide-y divide-gray-200" onSubmit={submitNoteHandler}>
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
                      ref={residentRef}

                    >
                      {residents.map((resident) => (
                        <option value={resident.id} key={resident.id}>
                          {resident.resident_firstName +
                            " " +
                            resident.resident_lastName}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="date"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Date
                  </label>
                  <div className="mt-1">
                    <input
                      ref={dateRef}
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
            ref={notesRef}
            type="text"
            name="notes"
            id="notes"
            className="shadow-sm rounded-md mt-1 text-md text-gray-900 w-full h-60"
            placeholder="Provide the notes you want to add."
          >
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

export default NoteNew;
