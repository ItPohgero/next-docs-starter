import { Command, CommandInput } from '@/components/ui/command'
import { PropsWithChildren } from 'react'

export function UiCommand({ children }: PropsWithChildren) {
  return (
    <Command className="rounded-lg border shadow-md">
      <CommandInput placeholder="Type a command or search..." />
      {children}
    </Command>
  )
}
