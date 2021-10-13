import React, { useState, useEffect } from 'react';
import Title from './components/Title';
import Reviews from "./components/Reviews"
import NextPrevButtons from './components/NextPrevButtons'
import data from './data';

function App() {
  const [people, setPeople] = useState(data)
  const [index, setIndex] = useState(0)

  // reset the index value
  useEffect(() => {
    const lastIndex = people.length - 1
    if (index < 0) setIndex(lastIndex)
    if (index > lastIndex) setIndex(0)
  }, [index, people])


  // changes the slide automatically
  useEffect(() => {
    let slider = setInterval(() => setIndex(index + 1), 5000)
    return () => {
      clearInterval(slider)
    }
  }, [index])

  return (
    <section className="section">
      <Title />
      <div className="section-center">
        <Reviews people={people} index={index} />
        <NextPrevButtons index={index} setIndex={setIndex} />
      </div>
    </section>
  );
}

export default App;
