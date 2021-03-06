import React, { useRef, useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../context/auth-context"

import {
  Route,
  Redirect,
} from "react-router-dom";

export default function RegisterForm() {
  let history = useHistory();
  const authCtx = useContext(AuthContext)
  const centerNameRef = useRef()
  const nameRef = useRef()
  //const lastNameRef = useRef()
  const emailRef = useRef()
  const phoneRef = useRef()
  //const countryRef = useRef()
  const addressRef = useRef()
  const cityRef = useRef()
  const stateRef = useRef()
  const zipRef = useRef()
  const numberOfResidentsRef = useRef()
  const numberOfBedsRef = useRef()
  const numberOfCounselorsRef = useRef()
  const passwordRef = useRef()
  const password2Ref = useRef()

  const submitFormHandler = (event) => {
    event.preventDefault();

    const enteredCenterName = centerNameRef.current.value;
    const enteredName = nameRef.current.value;
    const enteredEmail = emailRef.current.value;
    const enteredPhone = phoneRef.current.value;
    const enteredAdress = addressRef.current.value;
    const enteredCity = cityRef.current.value;
    const enteredState = stateRef.current.value;
    const enteredZip = zipRef.current.value;
    const enteredNumOfResidents = numberOfResidentsRef.current.value;
    const enteredNumOfBeds = numberOfBedsRef.current.value;
    const enteredNumOfCounselors = numberOfCounselorsRef.current.value;
    const enteredPassword = passwordRef.current.value;



    fetch('https://calm-plains-23222.herokuapp.com/api/center', {
      method: "POST",
      body: JSON.stringify({
        name: enteredCenterName,
        address: enteredAdress,
        city: enteredCity,
        state: enteredState,
        zipCode: enteredZip,
        residentCount: enteredNumOfResidents,
        counselorCount: enteredNumOfCounselors,
        bedCount: enteredNumOfBeds,
        director_name: enteredName,
        email: enteredEmail,
        phone: enteredPhone,
        password: enteredPassword
      }),
      headers: {
        'Content-Type': 'application/json'
      }

    }).then(res => {
      if (res.ok) {
        return res.json()
      } else {
        res.json().then(data => {
          let errorMessage = 'Registration Failed!'
          console.log(data)
          alert(errorMessage)
          throw new Error(errorMessage)
        })
      }
    }).then((data) => {
      console.log(data)
      history.replace('/')
      authCtx.login(data.token)

    })

  }




  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-5xl mx-auto bg-white p-12 rounded-md shadow-sm m-6">
        <form className="space-y-8 divide-y divide-gray-200" onSubmit={submitFormHandler}>
          <div className="space-y-8 divide-y divide-gray-200">
            <div>
              <div>
                <h2 className="text-xl leading-6 font-medium text-gray-900">
                  Register
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  Sign up your center. You will be able to add your couselors
                  once you sign up
                </p>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4  sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="center-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Center Name
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <input
                      ref={centerNameRef}
                      type="text"
                      name="center-name"
                      id="center-name"
                      className="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-none rounded-md sm:text-sm border-gray-300"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="first_name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First name
                  </label>
                  <div className="mt-1">
                    <input
                      ref={nameRef}
                      type="text"
                      name="first_name"
                      id="first_name"
                      autoComplete="given-name"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="last_name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last name
                  </label>
                  <div className="mt-1">
                    <input
                      //ref={lastNameRef}
                      type="text"
                      name="last_name"
                      id="last_name"
                      autoComplete="family-name"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      ref={emailRef}
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone
                  </label>
                  <div className="mt-1">
                    <input
                      ref={phoneRef}
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Country / Region
                  </label>
                  <div className="mt-1">
                    <select
                      //ref={countryRef}
                      id="country"
                      name="country"
                      autoComplete="country"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    >
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                  </div>
                </div>

                <div className="sm:col-span-6">
                  <label
                    htmlFor="street_address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Street address
                  </label>
                  <div className="mt-1">
                    <input
                      ref={addressRef}
                      type="text"
                      name="street_address"
                      id="street_address"
                      autoComplete="street-address"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-700"
                  >
                    City
                  </label>
                  <div className="mt-1">
                    <input
                      ref={cityRef}
                      type="text"
                      name="city"
                      id="city"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="state"
                    className="block text-sm font-medium text-gray-700"
                  >
                    State / Province
                  </label>
                  <div className="mt-1">
                    <input
                      ref={stateRef}
                      type="text"
                      name="state"
                      id="state"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="zip"
                    className="block text-sm font-medium text-gray-700"
                  >
                    ZIP / Postal
                  </label>
                  <div className="mt-1">
                    <input
                      ref={zipRef}
                      type="text"
                      name="zip"
                      id="zip"
                      autoComplete="postal-code"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <div>
                <h2 className="text-xl leading-6 font-medium text-gray-900">
                  About
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  We'll always let you know about important changes, but you
                  pick what else you want to hear about.
                </p>
              </div>
            </div>
            <div>
              <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="current-residents"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Number of Current Resident
                  </label>
                  <div className="mt-1">
                    <input
                      ref={numberOfResidentsRef}
                      type="number"
                      name="current-residents"
                      id="current-residents"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="beds"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Number of Beds
                  </label>
                  <div className="mt-1">
                    <input
                      ref={numberOfBedsRef}
                      type="number"
                      name="beds"
                      id="beds"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="number-couselors"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Number of Counselors
                  </label>
                  <div className="mt-1">
                    <input
                      ref={numberOfCounselorsRef}
                      type="number"
                      name="number-couselors"
                      id="number-couselors"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="pt-8 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <div className="mt-1">
                    <input
                      ref={passwordRef}
                      type="password"
                      name="password"
                      id="password"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="password2"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Retype Password
                  </label>
                  <div className="mt-1">
                    <input
                      ref={password2Ref}
                      type="password"
                      name="password2"
                      id="password2"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <div>
                  <h2 className="text-xl leading-6 font-medium text-gray-900">
                    Payment Information
                  </h2>
                </div>
              </div>
              <fieldset>
                <legend className="block text-sm font-medium text-gray-700 pt-6">
                  Card Details
                </legend>
                <div className="mt-1 bg-white rounded-md shadow-sm -space-y-px">
                  <div>
                    <label htmlFor="card-number" className="sr-only">
                      Card number
                    </label>
                    <input
                      type="text"
                      name="card-number"
                      id="card-number"
                      className="focus:ring-indigo-500 focus:border-indigo-500 relative block w-full rounded-none rounded-t-md bg-transparent focus:z-10 sm:text-sm border-gray-300"
                      placeholder="Card number"
                    />
                  </div>
                  <div className="flex -space-x-px">
                    <div className="w-1/2 flex-1 min-w-0">
                      <label htmlFor="card-expiration-date" className="sr-only">
                        Expiration date
                      </label>
                      <input
                        type="text"
                        name="card-expiration-date"
                        id="card-expiration-date"
                        className="focus:ring-indigo-500 focus:border-indigo-500 relative block w-full rounded-none rounded-bl-md bg-transparent focus:z-10 sm:text-sm border-gray-300"
                        placeholder="MM / YY"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <label htmlFor="card-cvc" className="sr-only">
                        CVC
                      </label>
                      <input
                        type="text"
                        name="card-cvc"
                        id="card-cvc"
                        className="focus:ring-indigo-500 focus:border-indigo-500 relative block w-full rounded-none rounded-br-md bg-transparent focus:z-10 sm:text-sm border-gray-300"
                        placeholder="CVC"
                      />
                    </div>
                  </div>
                </div>
              </fieldset>
              <fieldset className="mt-6 bg-white">
                <legend className="block text-sm font-medium text-gray-700">
                  Billing address
                </legend>
                <div className="mt-1 rounded-md shadow-sm -space-y-px">
                  <div>
                    <label htmlFor="country" className="sr-only">
                      Country
                    </label>
                    <select
                      id="country"
                      name="country"
                      className="focus:ring-indigo-500 focus:border-indigo-500 relative block w-full rounded-none rounded-t-md bg-transparent focus:z-10 sm:text-sm border-gray-300"
                    >
                      <option>USA</option>
                      <option>Canada</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="postal-code" className="sr-only">
                      Postal code
                    </label>
                    <input
                      type="text"
                      name="postal-code"
                      id="postal-code"
                      className="focus:ring-indigo-500 focus:border-indigo-500 relative block w-full rounded-none rounded-b-md bg-transparent focus:z-10 sm:text-sm border-gray-300"
                      placeholder="Postal code"
                    />
                  </div>
                </div>
              </fieldset>
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
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

function redirect() {
  <Route exact path="/register">
    <Redirect to="/" />
  </Route>;
}
