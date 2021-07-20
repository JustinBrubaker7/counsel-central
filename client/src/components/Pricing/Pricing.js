/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from '@heroicons/react/outline'

const features = [
  'Logging Counseling Sessions',
  'Viewing Your Caseload',
  'Viewing Every Resident In Your Program',
  'Invite Counselors To Join Easily',
  'One Easy Price',
  'Always Safe and Secure',
  'Easy To Use',
  'Center Event Planning',
  'View Resident Proggress and Track Notes',
  'Chat With Other Counselors',
]

export default function Pricing() {
  return (
    <div className="bg-white lg:p-12 lg:-mb-12">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="pb-16 xl:flex xl:items-center xl:justify-between">
          <div>
            <h1 className="text-4xl font-extrabold sm:text-5xl sm:tracking-tight">
              <span className="text-gray-900">Everything you need for </span>
              <span className="text-honolulu">$199 a month</span>
            </h1>
            <p className="mt-5 text-xl text-gray-500">
              Every feature we offer for one low price!
            </p>
          </div>
          <a
            href="/register"
            className="mt-8 w-full bg-honolulu border border-transparent px-5 py-3 inline-flex items-center justify-center text-base font-medium rounded-md text-white hover:bg-honolulu-dark sm:mt-10 sm:w-auto xl:mt-0"
          >
            Get started today
          </a>
        </div>
        <div className="border-t border-gray-200 pt-16 xl:grid xl:grid-cols-3 xl:gap-x-8">
          <div>
            <h2 className="text-base font-semibold text-honolulu tracking-wide uppercase">Counseling made easy</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900">All-in-one platform</p>
            <p className="mt-4 text-lg text-gray-500">
              We know you care about those in your program. We care just as much about you. That is why we made Counsel Central. We had you in mind. Making counseling easiser.
            </p>
          </div>
          <div className="mt-4 sm:mt-8 md:mt-10 md:grid md:grid-cols-2 md:gap-x-8 xl:mt-0 xl:col-span-2">
            <ul className="divide-y divide-gray-200">
              {features.slice(0, 5).map((feature, featureIdx) =>
                featureIdx === 0 ? (
                  <li key={feature} className="py-4 flex md:py-0 md:pb-4">
                    <CheckIcon className="flex-shrink-0 h-6 w-6 text-green-500" aria-hidden="true" />
                    <span className="ml-3 text-base text-gray-500">{feature}</span>
                  </li>
                ) : (
                  <li key={feature} className="py-4 flex">
                    <CheckIcon className="flex-shrink-0 h-6 w-6 text-green-500" aria-hidden="true" />
                    <span className="ml-3 text-base text-gray-500">{feature}</span>
                  </li>
                )
              )}
            </ul>
            <ul className="border-t border-gray-200 divide-y divide-gray-200 md:border-t-0">
              {features.slice(5).map((feature, featureIdx) =>
                featureIdx === 0 ? (
                  <li key={feature} className="py-4 flex md:border-t-0 md:py-0 md:pb-4">
                    <CheckIcon className="flex-shrink-0 h-6 w-6 text-green-500" aria-hidden="true" />
                    <span className="ml-3 text-base text-gray-500">{feature}</span>
                  </li>
                ) : (
                  <li key={feature} className="py-4 flex">
                    <CheckIcon className="flex-shrink-0 h-6 w-6 text-green-500" aria-hidden="true" />
                    <span className="ml-3 text-base text-gray-500">{feature}</span>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
