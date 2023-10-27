import Link from "next/link"

const MainFooter = () => {
  return (
    <footer className="flex-none p-8 flex justify-between items-center">
      <Link href="/">
        © {new Date().getFullYear()} Washer / Dryer Projects
      </Link>
    </footer>
  )
}

export default MainFooter