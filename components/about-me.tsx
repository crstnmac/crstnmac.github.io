import {Link, Picture} from 'components'

export default function AboutMe() {
  return (
    <div className="flex flex-col justify-center items-center mx-auto">
      <div className="grid w-full gap-6 sm:grid-flow-col">
        <div className="flex flex-col items-start justify-center gap-1.5 rounded-3xl p-6 border-[0.5px] dark:border-black-600 border-black-200 dark:bg-black-800 bg-black-100">
          <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-purple-500 to-green-400 dark:from-yellow-300 dark:via-purple-400 dark:to-green-300">
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
        </div>
        <div className="hidden md:block border-[0.5px] h-40 sm:h-auto dark:border-black-600 border-black-200 rounded-3xl bg-[conic-gradient(var(--tw-gradient-stops))] from-yellow-600 to-black-100"></div>
        <div className="hidden md:block border-[0.5px] h-40 sm:h-auto dark:border-black-600 border-black-200 rounded-3xl bg-[conic-gradient(var(--tw-gradient-stops))] from-purple-600 to-black-100"></div>
        <div className="hidden md:block border-[0.5px] h-40 sm:h-auto dark:border-black-600 border-black-200 rounded-3xl bg-[conic-gradient(var(--tw-gradient-stops))] from-green-600 to-black-100"></div>
      </div>
    </div>
  )
}
