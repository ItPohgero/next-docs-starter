'use client'
import React, { Fragment, PropsWithChildren } from 'react'
import { compareDesc, format, parseISO } from 'date-fns'
import { Docs, allDocs } from 'contentlayer/generated'
import Link from 'next/link'
import { Else, If, Then } from 'react-if'
import { useParams } from 'next/navigation'
import Drawer from 'src/components/ui/drawer'
import { SearchDocs } from 'src/components/ui/searchDocs'

interface DataList {
  group: any
  title: string
  url: string
  date: any
}
export interface DocList {
  label: 'title' | 'menu'
  title: string
  url?: string
  date: string
  activePath?: string
}

function DocsCard(doc: DocList) {
  return (
    <Fragment>
      <If condition={doc?.label === 'title'}>
        <Then>
          <div className="mb-2 mt-4 font-bold capitalize">{doc?.title}</div>
        </Then>
        <Else>
          <Link href={doc.url} legacyBehavior>
            <div
              className={`${doc.url === `/docs/${doc?.activePath}` ? 'border-l border-lime-800' : 'border-l'} group cursor-pointer py-1 text-slate-600`}
            >
              <div className="pl-4 capitalize group-hover:text-slate-800">
                <div>{doc.title}</div>
                <time className="text-[7pt]">up: {doc.date}</time>
              </div>
            </div>
          </Link>
        </Else>
      </If>
    </Fragment>
  )
}
const DocsLayout = (props: PropsWithChildren) => {
  const params: any = useParams()
  const alldocs: Docs[] = allDocs.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
  const data: DataList[] = alldocs?.map((item: Docs) => {
    return {
      group: item?._raw?.sourceFileDir === '.' ? '' : item?._raw?.sourceFileDir,
      title: item?.title,
      url: item?.url,
      date: format(parseISO(item?.date), 'd LLLL yyyy'),
    }
  })
  const transformedData: DocList[] = data.reduce((acc, curr, index) => {
    if (curr.group !== data[index - 1]?.group) {
      acc.push({ label: 'title', title: curr.group })
    }
    acc.push({ label: 'menu', ...curr })
    return acc
  }, [])
  return (
    <div className="relative mx-auto grid  max-w-4xl grid-cols-12 gap-4 pt-20 lg:max-w-7xl">
      <div className="absolute right-4 top-4 block lg:hidden">
        <Drawer>asd</Drawer>
      </div>
      <div className="col-span-3 hidden p-2 lg:block">
        <div>
          <SearchDocs data={transformedData} />
        </div>
        {transformedData?.map((doc, idx) => (
          <DocsCard activePath={params?.slug?.join('/')} key={idx} {...doc} />
        ))}
      </div>
      <div className="col-span-12 p-4 lg:col-span-7">{props?.children}</div>
      <div className="order-first col-span-12 w-full lg:order-last lg:col-span-2">TOC</div>
    </div>
  )
}

export default DocsLayout
