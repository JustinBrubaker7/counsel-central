/* This example requires Tailwind CSS v2.0+ */
export default function Divider({ name }) {
    return (
        <div className="relative mt-12">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center">
                <span className="px-3 bg-gray-100 text-lg font-medium text-gray-900">{name}</span>
            </div>
        </div>
    )
}