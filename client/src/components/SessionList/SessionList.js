import { DownloadIcon } from '@heroicons/react/outline'

const items = [

    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    // More items...
]

export default function SessionList() {
    return (
        <ul className="divide-y divide-gray-200">
            {items.map((item) => (
                <li key={item.id} className="py-4">

                    <span>This is where the session notes are going: {item.id} <DownloadIcon className="w-5" /></span>
                </li>
            ))}
        </ul>
    )
}