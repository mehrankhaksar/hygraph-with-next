import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container">
        <div className="flex justify-between items-center py-4">
          <Link href="/">
            <h1
              className="bg-linear-to-b from-primary-600 to-indigo-600 bg-clip-text tracking-tight"
              style={{ WebkitTextFillColor: "transparent" }}
            >
              GameZone
            </h1>
            <span className="text-gray-600 text-sm">
              The Ultimate Gaming Blog
            </span>
          </Link>
          <nav>
            <Link href="/about">About</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
