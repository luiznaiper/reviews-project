import { useState } from 'react'
import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'
function App() {
  const [index, setIndex] = useState(0)
  const { name, job, image, text } = people[index]

  const nextPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex + 1
      if (newIndex < people.length) {
        return newIndex
      } else {
        return 0
      }
    })
  }

  const prevPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex - 1
      if (newIndex < 0) {
        return people.length - 1
      } else {
        return newIndex
      }
    })
  }

  const randomize = () => {
    let random = Math.floor(people.length * Math.random())
    if (random === index && random < people.length - 1) {
      random = index + 1
    } else if (random === index && random > 0) {
      random = index - 1
    }
    setIndex(random)
  }

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className="btn btn-hipster" onClick={randomize}>
          Randomize
        </button>
      </article>
    </main>
  )
}

export default App
