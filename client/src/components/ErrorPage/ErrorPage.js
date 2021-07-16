import React from 'react'

const errorPage = () => {
    return (
        <div className="bg-white min-h-screen px-4 py-6 sm:px-6 sm:py-24 md:grid md:place-items-center">
            <div className="max-w-max mx-auto mb-60">
                <main className="sm:flex">
                    <p className="text-4xl font-extrabold text-honolulu sm:text-5xl">404</p>
                    <div className="sm:ml-6">
                        <div className="sm:border-l sm:border-gray-200 sm:pl-6">
                            <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">Page not found</h1>
                            <p className="mt-1 text-base text-gray-500">Please check the URL in the address bar and try again.</p>
                        </div>
                        <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                            <a
                                href="/"
                                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-honolulu hover:bg-honolulu-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Go back home
                            </a>
                            <a
                                href="/login"
                                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-honolulu-dark bg-indigo-100 hover:bg-honolulu-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Login
                            </a>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default errorPage
