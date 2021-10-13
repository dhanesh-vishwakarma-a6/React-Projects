import React from "react"
import { FaQuoteRight } from 'react-icons/fa';

const Reviews = ({ people, index }) => {
    return (
        <>
            {people.map((person, personIndex) => {
                const { id, name, image, title, quote } = person

                let position = "nextSlide"

                if (personIndex === index) {
                    position = "activeSlide"
                }

                if (personIndex === index - 1 ||
                    (index === 0 && personIndex === people.length - 1)) {
                    position = "lastSlide"
                }

                return (
                    <article className={position} key={id}>
                        <img src={image} alt={name} className="person-img" />
                        <h4>{name}</h4>
                        <p className="title">{title}</p>
                        <p className="quote">{quote}</p>
                        <FaQuoteRight className="icon" />
                    </article>
                )
            })}
        </>
    )
}

export default Reviews