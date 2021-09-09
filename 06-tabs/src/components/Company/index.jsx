import React from "react"
import "./style.css"

const Company = ({ jobs, value, setValue }) => {
    return (
        <div className="btn-container">
            {jobs.map((job, index) => (
                <button
                    key={job.id}
                    className={`job-btn ${index === value && 'active-btn'}`}
                    onClick={() => setValue(index)}
                >
                    {job.company}
                </button>
            ))}
        </div>
    )
}

export default Company
