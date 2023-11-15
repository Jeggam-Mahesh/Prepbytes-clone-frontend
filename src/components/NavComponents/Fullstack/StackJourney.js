import React, { useState } from 'react'
import "./fullstackCSS/stackjourney.css"


const StackJourney = ({journey}) => {

    const [num, setNum] = useState(0)
    return (
        <section className='StackJourney__main'>
            <div className="StackJourney__main--left">
                <div className="StackJourney__main--left-tab-container">
                    {
                        journey.map((item, index) => (
                            <div className="StackJourney__main--left-tab-container-tab" key={index}>
                                <div className="StackJourney__main--left-tab-container-tab--circle">
                                    {index + 1}
                                </div>

                                <div className={`StackJourney__main--left-tab-container-tab--box ${num === index ? "StackJourney__main--left-tab-container-tab--box-active" : ""}`} onClick={() => setNum(index)}>
                                    {item.title}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="StackJourney__main--right">
                <div className="StackJourney__main--right-content">
                    <div className="StackJourney__main--right-content-heading">
                        <p className="StackJourney__main--right-content-heading--text">
                            {journey[num].title}
                        </p>
                    </div>

                    <div className="StackJourney__main--right-content-list">
                        <ul className="list">
                            {journey[num].content.map((point, idx) => (
                                <li className="list__item" key={idx}>
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="StackJourney__main--right-content-image">
                        <img src={journey[num].thumb} alt="journey img" className="StackJourney__main--right-content-image-img" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StackJourney
