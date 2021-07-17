import React, { useRef, useContext, useState } from 'react'
import AuthContext from '../context/auth-context'

import SuccessModal from '../components/SuccessModal/SuccessModal'

const AddCouselorForm = () => {
  const authCtx = useContext(AuthContext)

  const nameValueRef = useRef()
  const emailValueRef = useRef()

  const [success, setSuccess] = useState(false)


  const submitFormHandler = (event) => {

    setSuccess(false)
    const enteredEmail = emailValueRef.current.value;
    const enteredName = nameValueRef.current.value;
    const centerId = authCtx.center_id
    //validation

    fetch('http://localhost:3001/api/log/newuser', {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail,
        center_id: centerId,
        name: enteredName
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      if (res.ok) {
        setSuccess(true)
        return res.json()
      } else {
        res.json().then(data => {
          let errorMessage = 'signup faild!'
          console.log(data)
          alert(errorMessage)
          throw new Error(errorMessage)
        })
      }
    })
  }



  const successtimer = () => {
    setSuccess(true)
    setTimeout(function () { setSuccess(false) }, 4000);
  }

  return (
    <>
      <div className="max-w-5xl mx-auto bg-white p-12 rounded-md shadow-sm m-6">
        {success && <SuccessModal className="mt-12" />}
        <form className="space-y-8 divide-y divide-gray-200" onSubmit={submitFormHandler}>
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
                      ref={nameValueRef}
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
                      ref={emailValueRef}
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
