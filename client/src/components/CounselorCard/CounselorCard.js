/* This example requires Tailwind CSS v2.0+ */
import { MailIcon, UserGroupIcon } from '@heroicons/react/solid'

export default function CounselorCard({ person }) {
    return (
        <div>
            <li

                className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
            >
                <div className="flex-1 flex flex-col p-8">
                    <img className="w-32 h-32 flex-shrink-0 mx-auto bg-black rounded-full" src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" alt="" />
                    <h3 className="mt-6 text-gray-900 text-sm font-medium">{person.name}</h3>
                    <dl className="mt-1 flex-grow flex flex-col justify-between">
                        <dt className="sr-only">Title</dt>
                        <dd className="text-gray-500 text-sm">Counselor</dd>
                        <dt className="sr-only">Role</dt>
                        <dd className="mt-3">
                            <span className="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                                {"number of residents"}
                            </span>
                        </dd>
                    </dl>
                </div>
                <div>
                    <div className="-mt-px flex divide-x divide-gray-200">
                        <div className="w-0 flex-1 flex">
                            <a
                                href={"/"}
                                className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                            >
                                <UserGroupIcon className="w-4 h-4 text-gray-400" aria-hidden="true" />
                                <span className="ml-3">Caseload</span>
                            </a>
                        </div>
                        <div className="-ml-px w-0 flex-1 flex">
                            <a
                                href={`tel:${person.telephone}`}
                                className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                            >
                                <MailIcon className="w-4 h-4 text-gray-400" aria-hidden="true" />
                                <span className="ml-3">Comment</span>
                            </a>
                        </div>
                    </div>
                </div>
            </li>

        </div>
    )
}
