'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const handleInputChange = (e) => {
    const value = e.target.value
    setQuery(value)

    if (value.trim()) {
      import('./data/searchIndex').then(({ searchIndex }) => {
        const filtered = searchIndex.filter(item =>{
          const title = item.title?.toLowerCase() || ''
          const keywords = item.keywords?.toLowerCase() || '' 
          const description = item.description?.toLowerCase() || ''

          const q = value.toLowerCase()

          return (
            title.includes(q) ||
            keywords.includes(q) ||
            description.includes(q)
          )}
        )
        setSuggestions(filtered)
        setShowSuggestions(true)
      })
    } else {
      setSuggestions([])
      setShowSuggestions(false)
    }
  }

  const handleSelectSuggestion = (path) => {
    console.log('=== CLICKED ===')
    console.log('Path:', path)
    console.log('Router:', router)

    try {
    router.push(path)
    console.log('Router.push called successfully')
  } catch (error) {
    console.error('Router error:', error)
  }

    setQuery('')
    setShowSuggestions(false)
    setIsOpen(false)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/search?query=${encodeURIComponent(query)}`)
      setQuery('')
      setShowSuggestions(false)
      setIsOpen(false)
    }
  }

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="p-2 text-white hover:opacity-70 transition-opacity"
        aria-label="Search"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.35-4.35"></path>
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 z-50">
          <form onSubmit={handleSearch} >
            <input
              type="text"
              value={query}
              onChange={handleInputChange}
              onBlur={() => {
                setTimeout(() => {
                  setShowSuggestions(false)
                }, 500)
              }}
              placeholder="Search..."
              className="bg-transparent border-b-2 border-white text-white placeholder-white/60 outline-none px-2 py-2 text-sm w-64"
              autoFocus
            />
          </form>

          {showSuggestions && suggestions.length > 0 && (
            <div className="absolute top-full mt-2 right-0 bg-black/70 backdrop-blur-md border border-white/10 rounded-lg shadow-lg max-h-96 overflow-y-auto w-64 z-[100]">
              {suggestions.map((item, index) => (
                <div
                  key={index}
                  className="p-3 cursor-pointer border-b border-white/10 last:border-b-0 hover:bg-white/10 transition-colors"
                  onClick={() =>  {
                    console.log('DIV CLICKED') 
                    handleSelectSuggestion(item.path)
                }}
                >
                  <strong className="block mb-1 text-white-900">{item.title}</strong>
                  <p className="text-xs text-grey-600 m-0">{item.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}