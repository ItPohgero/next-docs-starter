import React from 'react'

const Container = ({ placeholder = 'Template' }: { placeholder?: string }) => {
  return (
    <div className="w-full rounded-xl bg-white/5 p-4 ring-1 ring-inset ring-gray-900/10 dark:ring-white/10 lg:-m-4">
      <div
        className={`aspect-w-16 aspect-h-10 sm:aspect-h-6 lg:aspect-h-4 relative flex h-[200px] items-center justify-center overflow-hidden rounded-lg border border-dashed border-gray-900/10 dark:border-white/10`}
      >
        <div className="text-3xl font-bold text-slate-300">{placeholder}</div>
        <svg
          className="absolute inset-0 h-full w-full stroke-gray-900/10 dark:stroke-white/10"
          fill="none"
        >
          <defs>
            <pattern
              id="pattern-5c1e4f0e-62d5-498b-8ff0-cf77bb448c8e"
              x="0"
              y="0"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <path d="M-3 13 15-5M-5 5l18-18M-1 21 17 3" />
            </pattern>
          </defs>
          <rect
            stroke="none"
            fill="url(#pattern-5c1e4f0e-62d5-498b-8ff0-cf77bb448c8e)"
            width="100%"
            height="100%"
          />
        </svg>
      </div>
    </div>
  )
}

export default Container
