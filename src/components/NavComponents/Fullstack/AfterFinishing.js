import React from 'react'

const AfterFinishing = ({image, text}) => {
    return (
        <div className="StackProgram__main__right--box-one">
            <div className="StackProgram__main__right--box-one--icon-container">
                <img src={image} alt="bg" />
            </div>
            <div className="StackProgram__main__right--box-one--text-container">
                <p className="StackProgram__main__right--box-one--text-container--text">
                    {text}
                </p>
            </div>
        </div>
    )
}

export default AfterFinishing
