import React, { useState } from "react"
import people from "../../data"
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'
import "./styles.css"

const Review = () => {
    const [index, setIndex] = useState(0)
    const { name, job, image, text } = people[index]

    // reset the index if its more or less than array size
    const checkIndex = (index) => {
        if (index < 0) return people.length - 1
        else if (index > people.length - 1) return 0
        else return index
    }

    // next review preson
    const nextReview = () => {
        setIndex((index) => {
            let newIndex = index + 1
            return checkIndex(newIndex)
        })
    }

    // prev review person
    const prevReview = () => {
        setIndex((index) => {
            let newIndex = index - 1
            return checkIndex(newIndex)
        })
    }

    // random review person
    const randomReview = () => {
        let randomIndex = Math.floor(Math.random() * people.length - 1)
        setIndex(checkIndex(randomIndex))
    }

    return (
        // review
        <article className="review">
            {/* image container */}
            <div className="img-container">
                <img src={image} alt={name} className="person-img" />
                <span className="quote-icon">
                    <FaQuoteRight />
                </span>
            </div>
            {/* person info */}
            <h4 className="author">{name}</h4>
            <p className="job">{job}</p>
            <p className="info">{text}</p>
            {/* prev & next buttons */}
            <div className="btn-container">
                <button className="btn-prev" onClick={prevReview}>
                    <FaChevronLeft />
                </button>
                <button className="btn-prev" onClick={nextReview}>
                    <FaChevronRight />
                </button>
            </div>
            {/* random button */}
            <button className="btn-random" onClick={randomReview}>
                suprise me
            </button>
        </article>
    )
}

export default Review
