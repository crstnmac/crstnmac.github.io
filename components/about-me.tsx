import {Squircle} from '@squircle-js/react'
import {Link, Picture} from 'components'

export default function AboutMe() {
  return (
    <div className="flex flex-col justify-center items-center mx-auto">
      <div className="grid w-full gap-6 sm:grid-flow-col">
        <Squircle
          cornerRadius={60}
          cornerSmoothing={1}
          className="flex flex-col items-start justify-center gap-1.5 rounded-3xl p-12 border-[0.5px] dark:border-black-800 border-black-100 dark:bg-black-800 bg-gray-100"
        >
          <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r bg-black-900 dark:bg-black-200 ">
            Criston Mascarenhas
          </div>
          <div className="text-sm font-medium pl-1 dark:text-black-200">
            Fullstack Developer at{' '}
            <Link
              href="https://barrierbreak.com"
              className="font-bold dark:text-black-200
              hover:text-slate-900 hover:dark:text-black-100 capitalize transition duration-700 ease-in-out"
            >
              BarrierBreak
            </Link>
          </div>
          <div className="text-sm font-medium pl-1 dark:text-black-200">
            Working mostly on React, Next.js, TypeScript, React-Native, and
            TailwindCSS.
          </div>
          <div className="text-md mt-4 font-semibold italic text-gray-400">
            &quot;Make it work, make it right, make it fast. &quot; - Kent Beck
          </div>
        </Squircle>
        <div className="flex flex-col items-center justify-center gap-6">
          <Squircle
            cornerRadius={60}
            cornerSmoothing={1}
            className="border-[0.5px] dark:border-black-800 border-black-100 dark:bg-black-800 bg-gray-100"
          >
            <Picture
              className="w-full h-full"
              alt="Criston Mascarenhas"
              width={160}
              height={160}
              src="https://dqy38fnwh4fqs.cloudfront.net/UHBADP79DNJ867R3OQJ8RMR8A7N6/hbadp79dnj867r3oqj8rmr8a7n6-profile.webp"
            />
          </Squircle>
        </div>
        {/* <div className="hidden md:block border-[0.5px] h-40 sm:h-auto dark:border-black-600 border-black-200 rounded-3xl bg-[conic-gradient(var(--tw-gradient-stops))] from-yellow-600 to-black-100"></div>
        <div className="hidden md:block border-[0.5px] h-40 sm:h-auto dark:border-black-600 border-black-200 rounded-3xl bg-[conic-gradient(var(--tw-gradient-stops))] from-purple-600 to-black-100"></div>
        <div className="hidden md:block border-[0.5px] h-40 sm:h-auto dark:border-black-600 border-black-200 rounded-3xl bg-[conic-gradient(var(--tw-gradient-stops))] from-green-600 to-black-100"></div> */}
      </div>
    </div>
  )
}
