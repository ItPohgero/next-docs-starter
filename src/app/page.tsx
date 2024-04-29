import { Code } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import Container from 'src/components/ui/container'

const Page = () => {
  return (
    <div className="mx-auto max-w-6xl">
      <div>
        <div className="text-center text-3xl font-bold">Docs Template Starter</div>
        <div className="text-center">Make with love</div>
        <div className="flex justify-center text-center">
          <Link href="/docs">
            <button className="mt-10 flex items-center justify-center gap-2 rounded-lg bg-slate-700 px-4 py-2 text-white hover:bg-slate-800">
              <div>
                <Code className="h-4 w-4" />
              </div>
              <div>Docs</div>
            </button>
          </Link>
        </div>
      </div>
      <div className="h-12" />
      <Container height="200px" />
      <div className="h-12" />
      <div className="grid grid-cols-2 gap-4">
        <Container height="200px" />
        <Container height="200px" />
      </div>
      <div className="h-12" />
      <Container height="400px" />
    </div>
  )
}

export default Page
