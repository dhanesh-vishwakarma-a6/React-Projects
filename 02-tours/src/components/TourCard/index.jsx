import React, { useState } from 'react';
import "./style.css"

const TourCard = ({ id, image, info, name, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false)

  return (
    // tour card
    <article className="single-tour">
      {/* tour image */}
      <img src={image} alt={name} />
      <footer>
        {/* tour info */}
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>

        <p>
          {/* read more */}
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "show more" : " read more"}
          </button>
        </p>
        {/* remove button */}
        <button
          className="delete-btn"
          onClick={() => removeTour(id)}>
          not interested
        </button>
      </footer>
    </article >
  )
};

export default TourCard;
