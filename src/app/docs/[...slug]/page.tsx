import { format, parseISO } from 'date-fns'
import { allDocs } from 'contentlayer/generated'
import { getMDXComponent } from 'next-contentlayer/hooks'

// export const generateStaticParams = async () => {
//   const staticParams = allDocs.map((docs) => {
//     const flattenedPath = Array.isArray(docs._raw.flattenedPath)
//       ? docs._raw.flattenedPath
//       : [docs._raw.flattenedPath]
//     return { slug: flattenedPath }
//   })
//   return staticParams
// }

export const generateMetadata = ({ params }) => {
  const docs = allDocs.find((docs) => docs._raw.flattenedPath === params?.slug?.join('/'))
  return { title: docs.title }
}

const DocsLayout = ({ params }: { params: { slug: any } }) => {
  const docs = allDocs.find((docs) => docs._raw.flattenedPath === params?.slug?.join('/'))
  const Content = getMDXComponent(docs.body.code)
  return (
    <article className="w-full">
      <div className="mb-8 text-center">
        <h1>{docs.title}</h1>
        <time dateTime={docs.date} className="mb-1 text-xs text-gray-600">
          {format(parseISO(docs.date), 'LLLL d, yyyy')}
        </time>
        <Content />
      </div>
    </article>
  )
}

export default DocsLayout
