import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import "./styles.css"

const SingleQuestion = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false)
  return (
    // single question
    <article className="question">
      {/* question */}
      <section>
        <h2>{title}</h2>
        {/* info show & hide button */}
        <button className='btn' onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </section>
      {/* question info */}
      <section className="info">
        {showInfo && <p>{info}</p>}
      </section>
    </article>
  )
};

export default SingleQuestion;
