'use client'
import { format, parseISO } from 'date-fns'
import { allDocs } from 'contentlayer/generated'
import { getMDXComponent } from 'next-contentlayer/hooks'

const DocsLayout = ({ params }: { params: { slug: any } }) => {
  const docs = allDocs?.find(
    (docs: { _raw: { flattenedPath: any } }) =>
      docs?._raw.flattenedPath === params?.slug?.join('/'),
  )

  if (!docs) {
    return <div className="text-center">Docs Not Found</div>
  }
  const Content = getMDXComponent(docs?.body?.code)
  return (
    <article className="w-full">
      <div className="mb-8 text-center">
        <h1>{docs?.title}</h1>
        <time dateTime={docs?.date} className="mb-1 text-xs text-gray-600">
          {format(parseISO(docs?.date), 'LLLL d, yyyy')}
        </time>
        <Content />
      </div>
    </article>
  )
}

export default DocsLayout
