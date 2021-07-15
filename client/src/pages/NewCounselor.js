import React, { useRef, useContext, useState, useEffect } from 'react'
import AuthContext from '../context/auth-context'
import { useHistory } from "react-router-dom";


//i need to trim the token from the URL
//send it to check to get back the users info
//get info and populate page
//submit registration with a post


const NewCounsleor = () => {
    const authCtx = useContext(AuthContext)

    let history = useHistory();

    let message

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [centerId, setCenterId] = useState()

    const passowrdRef = useRef()
    const passowrdConfirmRef = useRef()


    const getTokenIdFromUrl = () => {
        const pathName = window.location.pathname
        const trimPath = pathName.split('/', 1000)
        const token = trimPath[2]
        const fullToken = token.slice(6)
        //console.log(fullToken)
        return fullToken
    }


    const verifyCredentials = async (token) => {
        //console.log(token)
        await fetch('http://localhost:3001/api/auth/checktoken', {
            method: "POST",
            body: JSON.stringify({
                token: token
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (res.ok) {
                    //console.log(res)
                    return res.json()

                } else {
                    res.json().then(data => {
                        let errorMessage = 'Token Failed!'
                        //console.log(data)
                        alert(errorMessage)
                        throw new Error(errorMessage)
                    })
                }
            }).then((data) => {
                console.log(data)
                const name = data.verify.name
                const email = data.verify.email
                const centerId = data.verify.center_id

                setName(name)
                setEmail(email)
                setCenterId(centerId)

            })
    }




    useEffect(() => {
        const token = getTokenIdFromUrl()
        verifyCredentials(token)
    }, [])



    const submitFormHandler = async (event, token) => {
        event.preventDefault();

        const enteredPassword = passowrdRef.current.value;
        const enteredPasswordConfirm = passowrdConfirmRef.current.value;


        await fetch('http://localhost:3001/api/log/signup', {
            method: 'POST',
            body: JSON.stringify({
                name: name,
                email: email,
                password: enteredPassword,
                center_id: centerId


            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            if (res.ok) {
                return res.json()
            } else {
                res.json().then(data => {
                    let errorMessage = 'signup faild!'
                    console.log(data)
                    alert(errorMessage)
                    throw new Error(errorMessage)
                })
            }
        }).then((data) => {
            console.log(data)
            //const experationTime = new Date(new Date().getTime() + (+data.expiresIn * 1000))
            history.replace('/')
            authCtx.login(getTokenIdFromUrl())

        })




    }

    return (
        <>
            <div className="max-w-5xl mx-auto bg-white p-12 rounded-md shadow-sm m-6">
                <form className="space-y-8 divide-y divide-gray-200" onSubmit={submitFormHandler}>
                    <div className="">
                        <div>
                            <h1>{!message ? "" : message}</h1>
                            <div>
                                <h2 className="text-xl leading-6 font-medium text-gray-900">Join Counsel Central</h2>
                                <p className="mt-1 text-sm text-gray-500">
                                    You were invited to join cousel central as a counselor. Fill out your password below.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                        Password
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            ref={passowrdRef}
                                            type="password"
                                            name="password"
                                            id="password"
                                            className="shadow-sm focus:ring-honolulu focus:border-honolulu block w-full sm:text-sm border-gray-300 rounded-md"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-3">
                                    <label htmlFor="passowrdConfirm" className="block text-sm font-medium text-gray-700">
                                        Confirm Password
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            ref={passowrdConfirmRef}
                                            id="passowrdConfirm"
                                            name="passowrdConfirm"
                                            type="password"
                                            className="shadow-sm focus:ring-honolulu focus:border-honolulu block w-full sm:text-sm border-gray-300 rounded-md"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="mt-6">Name: {name}</p>
                        <p>Email: {email}</p>

                    </div>
                    <div className="pt-5">
                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-honolulu hover:bg-honolulu-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Log In
                            </button>
                        </div>
                    </div>
                </form>
            </div>


        </>
    )
}

export default NewCounsleor
