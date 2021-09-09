import React from "react"
import { FaAngleDoubleRight } from 'react-icons/fa'
import "./style.css"

const Jobs = ({ jobs, value }) => {
    // job destructure
    const { title, company, dates, duties } = jobs[value]
    return (
        <article className="job-info">
            <h2>{title}</h2>
            <h3>{company}</h3>
            <p className="job-date">{dates}</p>
            {duties.map((duty, index) => (
                <div key={index} className="job-desc">
                    <FaAngleDoubleRight className="job-icon" />
                    <p>{duty}</p>
                </div>
            ))}
        </article>
    )
}

export default Jobs