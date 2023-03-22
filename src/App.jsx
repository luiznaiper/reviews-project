import { useState } from 'react'
import people from './data'
import { FaBeer } from 'react-icons/fa'
function App() {
  const [index, setIndex] = useState(0)
  const { name, job, image, text } = people[index]
  console.log(name)

  return (
    <h1>
      Hola <FaBeer />
    </h1>
  )
}

export default App
