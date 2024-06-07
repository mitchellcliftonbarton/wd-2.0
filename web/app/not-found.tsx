import Link from 'next/link'

export default async function NotFound() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <h1>404</h1>
      <p>This page was not found</p>
      <Link
        href="/"
        className="mt-6 underline lg:hover:no-underline"
      >
        Go home
      </Link>
    </div>
  )
}
