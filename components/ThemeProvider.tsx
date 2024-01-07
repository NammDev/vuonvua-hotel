// app/providers.jsx

'use client'

import { ThemeProvider } from 'next-themes'

export function Providers({ children }: { children: React.ReactNode }) {
  // keep state here
  return (
    <ThemeProvider attribute='class'>
      <div className='min-h-screen'>
        <div className='dark:text-white dark:bg-black light:bg-red text-[#1E1E1E]'>{children}</div>
      </div>
    </ThemeProvider>
  )
}
