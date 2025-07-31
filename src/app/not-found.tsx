export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-bold text-gray-900">404</h1>
        <p className="text-lg text-gray-700">Page not found</p>
        <a
          href="/"
          className="inline-block px-6 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition"
        >
          Go Home
        </a>
      </div>
    </main>
  )
}