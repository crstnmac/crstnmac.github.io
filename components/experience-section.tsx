import {PropsWithChildren} from 'react'
import {Box, Link, Picture} from 'components'
import {t} from 'lib'
import {Squircle} from '@squircle-js/react'

interface IInfo {
  place?: string
  date?: string
  topic?: string
  event?: string
  eventlink?: string
  description?: string
  active?: string
  gif?: string
  img?: string
  youtube?: string
  learnt?: string
  about?: string
}

interface IExperience {
  name: string
  info: IInfo[]
}

interface IExperiences {
  experiences: IExperience[]
}

function calculateExperience(date: string) {
  const today = new Date()
  const startDate = new Date(date)
  const diffTime = Math.abs(today.getTime() - startDate.getTime())
  const diffYears = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 365))
  return diffYears
}

export default function Experience(props: PropsWithChildren<IExperiences>) {
  const {experiences} = props

  const experience = calculateExperience('2021-03-01')

  return (
    <Box as="section" className="px-0 w-full pt-8">
      {experiences.map((exp, id) => (
        <div className="mb-20" key={id}>
          <div className="flex items-center justify-start">
            <div className="flex items-center">
              <p className="font-semibold text-base">{exp.name}</p>
              {exp.name === 'Work Experience' && (
                <span className="bg-gray-300 text-black-900 py-0.5 px-2 text-xs font-semibold rounded-full ml-2 sm:ml-4">
                  {experience} yrs
                </span>
              )}
            </div>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {exp.info.map((exp, idx) => (
              <Squircle
                cornerRadius={40}
                cornerSmoothing={1}
                key={idx}
                className="break-words p-6 rounded-3xl border-[1px] dark:border-black-800 border-black-100 dark:bg-black-800 bg-gray-100 flex items-center "
              >
                <div className="flex flex-col gap-6">
                  <div className="w-20 h-20 rounded-full">
                    <Picture
                      className={t(
                        'w-full h-full rounded-full bg-black-100 border-[3px] sm:block',
                        exp.active ? 'border-black-700 border-dashed' : ''
                      )}
                      alt=""
                      width={100}
                      height={100}
                      src={
                        exp.img ? `/${exp.img}.png` : `/${exp.gif}.gif` || ''
                      }
                    />
                  </div>

                  {exp.date && (
                    <div>
                      <span className="bg-gray-300 text-black-900 py-0.5 px-2 text-xs font-semibold rounded-full">
                        {exp.date}
                      </span>
                    </div>
                  )}

                  <div>
                    <div className="flex items-center mb-0.5">
                      <p className="text-primary font-semibold text-sm mr-2">
                        {exp.topic}
                      </p>
                    </div>
                    <div className="capitalize text-gray-500 text-sm font-medium flex items-center flex-wrap">
                      <Link
                        href={exp.eventlink || ''}
                        className="text-black-500 dark:text-black-300 focus:outline-none cursor-pointer text-sm font-semibold max-w-max"
                        animatedUnderline
                      >
                        {exp.event}
                      </Link>
                      {exp.place ? (
                        <span className="ml-1 font-normal text-black-900 dark:text-black-400">
                          {'• ' + exp.place}
                        </span>
                      ) : null}
                    </div>
                    <div>
                      <div className="text-gray mt-2 text-xs sm:text-sm paragraph-clamp">
                        {exp.about}
                      </div>
                    </div>
                  </div>
                </div>
              </Squircle>
            ))}
          </div>
        </div>
      ))}
    </Box>
  )
}
