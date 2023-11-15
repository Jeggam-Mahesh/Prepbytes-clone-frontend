import React from 'react'

const ProgramHighlightCard = ({ image, title, desc }) => {
    return (
        <div className='ProgramHighlightsNew__highlights_point_container'>
            <div className="ProgramHighlightsNew__highlights_point_image_container">
                <img src={image} alt='img' className='ProgramHighlightsNew__highlights_point_image' />
            </div>

            <div className="ProgramHighlightsNew__highlights_point_text_container">
                <p className="ProgramHighlightsNew__highlights_point_text_heading">
                    {title}
                </p>
                <p className="ProgramHighlightsNew__highlights_point_text_sub_heading">
                    {desc}
                </p>
            </div>
        </div>
    )
}

export default ProgramHighlightCard
