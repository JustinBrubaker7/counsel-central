import { DownloadIcon } from '@heroicons/react/outline'



export default function SessionList({ notes }) {
    return (
        <div className="flow-root">
            <h1 className="mt-0 p-0">Sessions</h1>
            <ul className="divide-y divide-gray-200 flow-root">
                {notes.map((note) => (
                    <li key={note.id} className="py-4">

                        <div><span className="font-bold">Session Date:</span> {note.date ? note.date.split("T", 1) : "no date"}</div>
                        <div> <span className="font-bold">Session note:</span> {note.note ? note.note : "no note text"} </div>
                        <DownloadIcon className="w-5" />
                    </li>
                ))}
            </ul>
        </div>
    )
}