/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from '@heroicons/react/outline'

const features = [
  {
    name: 'Invite Team Members',
    description: 'Add unlimited counselors and staff to your centers team.',
  },
  {
    name: 'Couseling Notes',
    description: 'Easily view, edit, and add counseling notes for every session with your residents.',
  },
  {
    name: 'Caseload Management',
    description: 'See an overview of resident to counselor assignments as well as house population log.',
  },
  {
    name: 'Center Wide Event Calendar',
    description: 'Quickly view all events held in your center by the week, month, or year.',
  },
  {
    name: 'Resident Progress Tracking',
    description: 'Track admission, progress, growth, and graduation on each resident in your program.',
  },
  {
    name: 'Safe and Secure',
    description: 'Feel confident that all information is secure.',
  },
  {
    name: 'Easy to Use',
    description: 'Straight forward software, easy to navigate and learn quickly.',
  },
  {
    name: 'Interact with Colleagues',
    description: 'Leave notes for your colleagues on their assigned caseload.',
  },
]

export default function FeatureSectionExternal() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">All-in-one platform</h2>
          <p className="mt-4 text-lg text-gray-500">
            The perfect software for your center or program to manage, care for, and help you residents more effectivly.
          </p>
        </div>
        <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
          {features.map((feature) => (
            <div key={feature.name} className="relative">
              <dt>
                <CheckIcon className="absolute h-6 w-6 text-green-500" aria-hidden="true" />
                <p className="ml-9 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
              </dt>
              <dd className="mt-2 ml-9 text-base text-gray-500">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
