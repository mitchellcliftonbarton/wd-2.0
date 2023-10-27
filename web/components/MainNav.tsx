'use client'

import { usePathname } from 'next/navigation'
import Link from "next/link"
import { useState, useEffect } from 'react'

const MainNav = () => {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  // when pathname changes, close the menu
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <>
      <header className="main-nav fixed lg:relative flex-none top-0 left-0 w-full p-6 lg:p-8 bg-white flex justify-between items-center lg:items-start lg:grid lg:grid-cols-12 lg:gap-4">
        <div className="lg:col-span-2">
          <Link
            href="/"
          >Washer / Dryer Projects</Link>
        </div>

        <div className="col-span-10 hidden lg:flex items-start">
          <nav className={`${!pathname.includes('/exhibitions') ? 'bg-grey-med' : 'bg-grey-light'} inline-block w-[180px]`}>
            <ul>
              <li>
                <Link
                  href="/exhibitions"
                  className={`${pathname.includes('/exhibitions') ? 'underline' : ''}`}
                >Exhibitions</Link>
              </li>

              <li>
                <Link
                  href="/info"
                  className={`${pathname === '/info' ? 'underline' : ''}`}
                >Info</Link>
              </li>
            </ul>
          </nav>

          {pathname.includes('/exhibitions') && (
            <nav className="bg-grey-med inline-block w-[180px] ml-8">
              <ul>
                <li>
                  <Link
                    href="/exhibitions"
                    className={`${pathname === '/exhibitions' ? 'underline' : ''}`}
                  >All</Link>
                </li>

                <li>
                  <Link
                    href="/exhibitions/current"
                    className={`${pathname === '/exhibitions/current' ? 'underline' : ''}`}
                  >Current</Link>
                </li>

                <li>
                  <Link
                    href="/exhibitions/upcoming"
                    className={`${pathname === '/exhibitions/upcoming' ? 'underline' : ''}`}
                  >Upcoming</Link>
                </li>

                <li>
                  <Link
                    href="/exhibitions/past"
                    className={`${pathname === '/exhibitions/past' ? 'underline' : ''}`}
                  >Past</Link>
                </li>
              </ul>
            </nav>
          )}
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden"
        >{ menuOpen ? 'Close' : 'Menu' }</button>
      </header>

      <nav className={`mobile-menu fixed top-0 left-0 w-full h-full bg-white pt-[48px] px-6 pb-12 ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <Link
              href="/exhibitions"
              className={`${pathname.includes('/exhibitions') ? 'underline' : ''}`}
            >Exhibitions</Link>

            <ul className="pl-6">
              <li>
                <Link
                  href="/exhibitions"
                  className={`${pathname === '/exhibitions' ? 'underline' : ''}`}
                >All</Link>
              </li>

              <li>
                <Link
                  href="/exhibitions/current"
                  className={`${pathname === '/exhibitions/current' ? 'underline' : ''}`}
                >Current</Link>
              </li>

              <li>
                <Link
                  href="/exhibitions/upcoming"
                  className={`${pathname === '/exhibitions/upcoming' ? 'underline' : ''}`}
                >Upcoming</Link>
              </li>

              <li>
                <Link
                  href="/exhibitions/past"
                  className={`${pathname === '/exhibitions/past' ? 'underline' : ''}`}
                >Past</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link
              href="/info"
              className={`${pathname === '/info' ? 'underline' : ''}`}
            >Info</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default MainNav