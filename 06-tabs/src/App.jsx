import React, { useState, useEffect } from 'react'
import Loader from './components/Loader'
import Title from "./components/Title"
import Company from './components/Company'
import Jobs from './components/Jobs'
import MoreInfo from './components/MoreInfo'

function App() {
  const [loading, setLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [value, setValue] = useState(0)

  // fetch jobs from API
  const fetchJobs = async () => {
    const url = 'https://course-api.com/react-tabs-project'
    const response = await fetch(url)
    const newJobs = await response.json()
    setJobs(newJobs)
    setLoading(false)
  }

  // preload jobs on page
  useEffect(() => {
    fetchJobs()
  }, [])

  // loading area
  if (loading) return <Loader />

  // component render
  return (
    <section className="section">
      <Title />
      <div className="jobs-center">
        <Company jobs={jobs} value={value} setValue={setValue} />
        <Jobs jobs={jobs} value={value} />
      </div>
      <MoreInfo />
    </section>
  )
}

export default App
