import React, { useRef, useContext } from "react"
import AuthContext from "../../context/auth-context"


export default function LoginForm() {

  const emailValueRef = useRef()
  const passwordeValueRef = useRef()

  const authCtx = useContext(AuthContext)

  const submitFormHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailValueRef.current.value;
    const enteredPassowrd = passwordeValueRef.current.value;

    //validation

    fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassowrd
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      if (res.ok) {
        return res.json()
      } else {
        res.json().then(data => {
          let errorMessage = 'Auth Failed!'
          console.log(data)
          alert(errorMessage)
          throw new Error(errorMessage)
        })
      }
    }).then((data) => {

      //need to replace woth what the actual data and token reflect
      authCtx.login(data.token)
    })

  }



  return (
    <div className="py-12 bg-gray-50 flex flex-col justify-center sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="mx-auto h-16 w-auto"
          src="./favicon.png"
          alt="Counsel Central"
        />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>

      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={submitFormHandler}>
            <div>
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
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-honolulu focus:border-honolulu sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input
                  ref={passwordeValueRef}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-honolulu focus:border-honolulu sm:text-sm"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  className="h-4 w-4 text-honolulu focus:ring-honolulu border-gray-300 rounded"
                />
                <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="/home" className="font-medium text-honolulu hover:text-honolulu">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-honolulu hover:bg-honolulu-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-honolulu"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
