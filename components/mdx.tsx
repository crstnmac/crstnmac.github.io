import { Callout, CodeTitle, Pre } from 'components'
import { t } from 'lib'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { Fira_Code } from 'next/font/google'
import React from 'react'

const fira = Fira_Code({
  subsets: ['latin'],
  display: 'swap',
})

const components = {
  Callout,
  CodeTitle,
  a: ({ ...props }: React.HTMLAttributes<HTMLAnchorElement>) => (
    <a
      className="animated-underline border-b border-dotted border-dark hover:border-dark/0"
      {...props}
    />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className={t(
        'text-xl leading-7 [&:not(:first-child)]:mt-6 dark:text-black-200',
        className
      )}
      {...props}
    />
  ),
  ul: ({ ...props }) => (
    <ul className="my-6 ml-6 list-outside list-disc text-xl" {...props} />
  ),
  ol: ({ ...props }) => (
    <ol className="my-6 ml-6 list-outside list-decimal text-xl" {...props} />
  ),
  li: ({ ...props }) => <li className="mt-2" {...props} />,
  blockquote: ({
    className,
    ...props
  }: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="mt-6 border-l-4 border-dark pl-6 italic text-black-900 dark:text-black-200 [&>*]:text-zinc-600"
      {...props}
    />
  ),
  table: ({ ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 min-w-full overflow-y-auto rounded-md">
      <table className="min-w-full divide-y divide-gray-400" {...props} />
    </div>
  ),
  tr: ({ ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr className="m-0 p-0 even:bg-white" {...props} />
  ),
  th: ({ ...props }) => (
    <th
      className="border border-gray-400 bg-white px-4 py-2 text-left font-semibold [&[align=center]]:text-center [&[align=right]]:text-right"
      {...props}
    />
  ),
  td: ({ ...props }) => (
    <td
      className="border border-gray-400 px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right"
      {...props}
    />
  ),
  code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code
      className={t(
        'relative  bg-opacity-25 py-[0.2rem] px-[0.3rem] font-mono text-base text-gray-600 dark:text-black-200',
        className,
        fira.className
      )}
      {...props}
    />
  ),
  pre: Pre,
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className={t('dark:text-black-200', className)} {...props} />
  ),
}

interface IMDXComponents {
  code: string
}
export function MDXComponents({ code }: IMDXComponents) {
  const Component = useMDXComponent(code)
  return <Component components={components} />
}
