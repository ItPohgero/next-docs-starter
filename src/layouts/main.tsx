import { CodeXml } from 'lucide-react'
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
            <a href="https://itpohgero.com">
              <CodeXml />
            </a>
          </div>
        </div>
      </div>
      <div className="relative z-10">
        <main className="mx-auto max-w-7xl pt-10">{children}</main>
      </div>

      <div className="mt-40">
        <div className="mx-auto max-w-2xl py-10 text-slate-700">
          <div className="text-center">
            <h3 className="mb-3 text-3xl"> Download Docs Template By IT Pohgero </h3>
            <p> Keep Growing. All day, Every day. </p>
            <div className="my-10 flex justify-center">
              <div className="mx-2 flex w-52 items-center rounded-lg border px-4 py-2">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
                  className="w-7 md:w-8"
                />
                <div className="ml-3 text-left">
                  <p className="text-xs text-gray-700">Download on </p>
                  <p className="text-sm md:text-base"> Google Play Store </p>
                </div>
              </div>
              <div className="mx-2 flex w-44 items-center rounded-lg border px-4 py-2">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/888/888841.png"
                  className="w-7 md:w-8"
                />
                <div className="ml-3 text-left">
                  <p className="text-xs text-gray-700">Download on </p>
                  <p className="text-sm md:text-base"> Apple Store </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-28 flex flex-col items-center text-sm text-gray-400 md:flex-row md:justify-between">
            <p className="order-2 mt-8 md:order-1 md:mt-0"> &copy; It Pohgero, 2024. </p>
            <div className="order-1 md:order-2">
              <span className="px-2">About us</span>
              <span className="border-l px-2">Contact us</span>
              <span className="border-l px-2">Privacy Policy</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LayoutMain
