/* This example requires Tailwind CSS v2.0+ */
const people = [
    { name: 'Jane Cooper', age: '21', counselor: 'Mark Fisher', length: '7 Months' },
    { name: 'Cody Fisher', age: '45', counselor: 'Jannet Golzika', length: '12 Days' },
    { name: 'Jane Cooper', age: '21', counselor: 'Mark Fisher', length: '7 Months' },
    { name: 'Cody Fisher', age: '45', counselor: 'Jannet Golzika', length: '12 Days' },
    { name: 'Jane Cooper', age: '21', counselor: 'Mark Fisher', length: '7 Months' },
    { name: 'Cody Fisher', age: '45', counselor: 'Jannet Golzika', length: '12 Days' },
    { name: 'Jane Cooper', age: '21', counselor: 'Mark Fisher', length: '7 Months' },
    { name: 'Cody Fisher', age: '45', counselor: 'Jannet Golzika', length: '12 Days' },
    { name: 'Jane Cooper', age: '21', counselor: 'Mark Fisher', length: '7 Months' },
    { name: 'Cody Fisher', age: '45', counselor: 'Jannet Golzika', length: '12 Days' },
    { name: 'Jane Cooper', age: '21', counselor: 'Mark Fisher', length: '7 Months' },
    { name: 'Cody Fisher', age: '45', counselor: 'Jannet Golzika', length: '12 Days' },
    { name: 'Jane Cooper', age: '21', counselor: 'Mark Fisher', length: '7 Months' },
    { name: 'Cody Fisher', age: '45', counselor: 'Jannet Golzika', length: '12 Days' },

    // More people...
]

export default function Table() {
    return (
        <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-prussian">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-4 py-3 text-left text-sm font-medium text-white uppercase tracking-wider"
                                    >
                                        Name
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-4 py-3 text-left text-sm font-medium text-white uppercase tracking-wider"
                                    >
                                        Age
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-4 py-3 text-left text-sm font-medium text-white uppercase tracking-wider"
                                    >
                                        Counselor
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-4 py-3 text-left text-sm font-medium text-white uppercase tracking-wider"
                                    >
                                        Length in program
                                    </th>
                                    <th scope="col" className="relative px-6 py-3">
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {people.map((person, personIdx) => (
                                    <tr key={person.email} className={personIdx % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
                                        <td className="px-4 py-4 whitespace-nowrap text-md font-medium text-gray-900">{person.name}</td>
                                        <td className="px-4 py-4 whitespace-nowrap text-md text-gray-500">{person.age}</td>
                                        <td className="px-4 py-4 whitespace-nowrap text-md text-gray-500">{person.counselor}</td>
                                        <td className="px-4 py-4 whitespace-nowrap text-md text-gray-500">{person.length}</td>
                                        <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <a href="#" className="text-prussian hover:text-prussian">
                                                Add Comment
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
