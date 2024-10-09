import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowUp } from 'react-icons/fa'

import Cards from '../components/Cards'
import axios from 'axios'

const Course = () => {
  const [book, setBook] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [showScrollButton, setShowScrollButton] = useState(false)

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:3001/book")
        setBook(res.data);
      } catch (error) {
        console.log("Error=>" + error)
      }
    }
    getBook()

    const handleScroll = () => {
      setShowScrollButton(window.pageYOffset > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const filteredBooks = book.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you
            <span className="text-pink-500"> Here!</span>
          </h1>
          <p className="mt-12">
            Welcome to our enchanting world of books! Our bookstore is a treasure trove of knowledge, imagination, and adventure. Here, you can embark on journeys through new ideas, stories, and experiences with every turn of a page. Whether you're a lover of literature, a curious scientist, or a mystery enthusiast, we have something for every reader. Come, dive into this ocean of words and let your mind explore new dimensions. Our books promise to open new doors for you. So, let's begin your journey and lose yourself in this wonderful world of books!
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-6 flex justify-end">
          <input
            type="text"
            placeholder="Search books..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-64 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredBooks.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-pink-500 text-white p-3 rounded-full shadow-lg hover:bg-pink-600 transition-colors duration-300"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  )
}

export default Course