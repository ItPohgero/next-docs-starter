import Image from 'next/image'
import Link from 'next/link'
import React, { PropsWithChildren } from 'react'
import { Navbar } from 'src/components/app/navbar'
import { AppConfig } from 'src/config/app.cofig'
import 'src/styles/main.css'

const LayoutMain = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-h-screen ">
      <div className="box landing-grid" />
      <div className="box-color" />
      <div className="sticky left-0 top-0 z-50 flex h-16 w-full items-center justify-center bg-white/80 ring-1 ring-slate-200 backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4">
          <div className="flex items-center justify-start gap-4">
            <div>
              <Link href="/" legacyBehavior passHref>
                <div className="text-md flex cursor-pointer items-center justify-start gap-2">
                  <Image src="/logo.svg" alt="logo" width={20} height={20} />
                  <div className="hidden font-bold md:block">{AppConfig.name}</div>
                </div>
              </Link>
            </div>
            <div className="hidden md:block">
              <Navbar />
            </div>
          </div>
          <div>
            <div>asd</div>
          </div>
        </div>
      </div>
      <div className="relative z-10">
        <main className="mx-auto max-w-7xl pt-10">{children}</main>
      </div>
    </div>
  )
}

export default LayoutMain
