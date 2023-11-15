import React from 'react'

const StackJourneyIpad = ({ journey }) => {
    return (
        <section className='StackJourney__main-ipad'>
            {journey.map((item, index) => (
                <div className="StackJourney__main-ipad-content" key={index}>
                    <div className="StackJourney__main--left-tab-container-tab">
                        <div className="StackJourney__main--left-tab-container-tab--circle">
                            {index + 1}
                        </div>
                        <div className="StackJourney__main--left-tab-container-tab--box">
                            {item.title}
                        </div>
                    </div>
                    <div className="StackJourney__main--right-content-list">
                        <ul className="list">

                            {item.content.map((item2, idx) => (
                                <li className="list__item" key={idx}>
                                    {item2}
                                </li>))
                            }
                        </ul>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default StackJourneyIpad
