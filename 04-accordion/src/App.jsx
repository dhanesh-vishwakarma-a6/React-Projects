import React, { useState } from 'react';
import SingleQuestion from './components/SingleQuestion';
import data from "./data"

function App() {
  const [FAQs, setFAQs] = useState(data)

  return (
    <main>
      <div className='container'>
        <header className="title">
          <h1>FAQs about login</h1>
        </header>
        <section className='info'>
          {FAQs.map((question) => {
            return (
              <SingleQuestion key={question.id} {...question}></SingleQuestion>
            );
          })}
        </section>
      </div>
    </main>
  )
}

export default App;
