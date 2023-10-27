import type { Metadata } from 'next'
import '@/styles/index.css'
import MainNav from '@/components/MainNav'
import MainFooter from '@/components/MainFooter'
import GoogleAnalytics from "@/components/GoogleAnalytics"

/* 
  METADATA
*/

export const metadata: Metadata = {
  title: 'Washer / Dryer Projects',
  description: 'Washer / Dryer Projects is a gallery in Mitchell Barton’s laundry room in Salt Lake City, Utah, USA.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex flex-col">
        {process.env.GA_MEASUREMENT_ID ? (
          <GoogleAnalytics ga_id= 
          {process.env.GA_MEASUREMENT_ID} />
        ) : null}
        
        <MainNav />
        
        <main className="flex-1 px-6 lg:px-8 pt-20 lg:pt-0">
          {children}
        </main>

        <MainFooter />
      </body>
    </html>
  )
}
