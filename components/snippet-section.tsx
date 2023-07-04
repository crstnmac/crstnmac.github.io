import {formatDate} from 'lib'
import {Snippet} from '.contentlayer/generated'
import {Box, Link} from 'components'

export default function BlogSection({snippets}: {snippets: Snippet[]}) {
  return (
    <Box as="section" className="animate-in fade-in duration-500 mx-0" fullSize>
      {snippets.length > 1 ? (
        <span className="font-mono text-sm font-semibold lowercase">
          scroll &rarr;
        </span>
      ) : undefined}
      <div className="flex flex-row items-start justify-start space-x-6 overflow-x-auto pb-8">
        {snippets?.length ? (
          <>
            {snippets.map((b) => (
              <div
                key={b._id}
                className="group p-2 w-full sm:w-[330px] flex-none rounded-2xl  bg-black-200 dark:bg-black-800 transition duration-700 ease-in-out"
              >
                <Link
                  href={`/snippets/${b.slugAsParams}`}
                  className="group flex flex-col"
                >
                  <div className="flex flex-col items-start justify-between b-4">
                    <div className="flex flex-col">
                      <span className="text-sm italic">
                        {formatDate(b.date)}
                      </span>
                      <h2 className="h3 mt-1 inline font-bold leading-8">
                        {b.title}
                      </h2>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </>
        ) : (
          <b>No snippets found</b>
        )}
      </div>
    </Box>
  )
}
