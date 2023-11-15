import React, { useState } from 'react'
import "./fullstackCSS/faq-pannel.css"
// import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"

const FaqPanel = ({ ques, ans }) => {

    const [isClicked, setIsClicked] = useState(false)

    return (
        <div className='panel'>
            <button className='panel__header' onClick={() => setIsClicked(!isClicked)}>
                {ques}
                <span className="panel__header-icon">
                    {
                        // isClicked ? <AiOutlineMinus /> : <AiOutlinePlus />
                    }
                </span>
            </button>

            <div className="panel__body" style={{ display: `${isClicked ? "block" : "none"}` }}>
                <p>{ans}</p>
            </div>
        </div>
    )
}

export default FaqPanel
