import React from 'react'

const JouneryCard = ({ number, title, desc, image, color }) => {
    return (
        <>
        <div className='journey-main'>
        <div className='elevationJourney_title_container_mobile'>
                <span className="elevationJourney_title_number_mobile" style={{border:`1px dashed ${color}`}}>
                    {number}
                </span>
                <span className="elevationJourney_title_mobile" style={{color: `${color}`}}>
                    {title}
                </span>
            </div>
            <b className='line2'></b>
            <div className="elevationJourney_desc_container_mobile">
                <div className="elevationJourney_desc_text_container_mobile">
                    <span className="elevationJourney_desc_mobile">
                        {desc}
                    </span>
                </div>
                <div >
                   <img className="elevationJourney_desc_img_container_mobile"  src={image} alt="journey img" />
                </div>
            </div>
        </div>
           
        </>
    )
}

export default JouneryCard
