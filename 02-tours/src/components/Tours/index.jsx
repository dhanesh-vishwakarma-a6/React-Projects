import React from 'react';
import TourCard from '../TourCard/index';
import "./style.css"

const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      {/* tours card list */}
      {tours.map((tour) => {
        return <TourCard key={tour.id} {...tour} removeTour={removeTour} />
      })}
    </section>
  )
};

export default Tours;
