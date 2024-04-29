import React from 'react'
import Container from 'src/components/ui/container'

const Page = () => {
  return (
    <div className="mx-auto max-w-6xl">
      <Container placeholder="Docs Template Starter" height="200px" />
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
