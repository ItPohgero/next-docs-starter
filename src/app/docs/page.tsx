import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns'
import { allDocs, Docs } from 'contentlayer/generated'
import { getMDXComponent } from 'next-contentlayer/hooks'

function DocsCard(doc: Docs) {
  const Content = getMDXComponent(doc.body.code)

  return (
    <div className="mb-8">
      <h2 className="text-xl">
        <Link href={doc.url} className="text-blue-700 hover:text-blue-900" legacyBehavior>
          {doc.title}
        </Link>
      </h2>
      <time dateTime={doc.date} className="mb-2 block text-xs text-gray-600">
        {format(parseISO(doc.date), 'LLLL d, yyyy')}
      </time>
      <div className="text-sm">
        <Content />
      </div>
    </div>
  )
}

export default function Home() {
  const docs = allDocs.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  return (
    <div className="w-full py-8">
      <h1 className="mb-8 text-center text-3xl font-bold">Next.js Example</h1>

      {docs.map((doc, idx) => (
        <DocsCard key={idx} {...doc} />
      ))}
    </div>
  )
}
