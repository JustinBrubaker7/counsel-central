import { DownloadIcon } from '@heroicons/react/outline'



export default function SessionList({ notes }) {
    return (
        <div className="flow-root">
            <ul className="divide-y divide-gray-200 flow-root">
                {notes.map((note) => (
                    <li key={note.id} className="py-4">

                        <span>Session Date: {note.date ? note.date.split("T", 15) : "no date"} <DownloadIcon className="w-5" /></span>
                        <span> Session note: {note.note ? note.note : "no note text"} < DownloadIcon className="w-5" /></span>
                    </li>
                ))}
            </ul>
        </div>
    )
}