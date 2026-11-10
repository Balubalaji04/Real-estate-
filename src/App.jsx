import { useState } from 'react'
import ErrorBoundary from './components/ErrorBoundary'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Agents from './sections/Agents'
import Enquiry from './sections/Enquiry'
import Hero from './sections/Hero'
import MapSection from './sections/MapSection'
import Properties from './sections/Properties'

export default function App() {
  const [searchQuery, setSearchQuery] = useState(null)

  const handleSearch = (query) => {
    setSearchQuery(query)
    const target = document.getElementById('properties')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <ErrorBoundary
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-[#0B1F3A] p-8 text-center text-white">
          <div>
            <p className="font-semibold text-[#D4AF37]">Something went wrong</p>
            <p className="mt-2 text-white/70">Refresh the page to reload Skyline Properties.</p>
          </div>
        </div>
      }
    >
      <div className="min-h-screen bg-navy text-white">
        <Navbar />
        <main>
          <Hero onSearch={handleSearch} />
          <Properties searchQuery={searchQuery} />
          <Agents />
          <Enquiry />
          <MapSection />
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  )
}
