import React, { useState, useEffect } from 'react'
import Loader from "./components/Loader/index"
import Tours from './components/Tours'

function App() {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  // * fetch tours info
  const url = 'https://course-api.com/react-tours-project'
  const fetchTours = async () => {
    try {
      setLoading(true)
      const response = await fetch(url)
      const tours = await response.json()
      setTours(tours)
      console.log(tours)
      setLoading(false)

    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  // remove tours
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  // preloads data on page
  useEffect(() => {
    fetchTours()
  }, [])


  // data loading status
  if (loading) {
    return (
      <main>
        <Loader />
      </main>
    )
  }

  // get tours if info not preloaded on page
  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
      </main>
    )
  }

  // displays tours
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  )

}

export default App
