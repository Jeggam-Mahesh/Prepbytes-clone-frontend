import React from 'react'
import "./fullstackCSS/stackcompanies-card.css"
const StackCompaniesCard = ({ title, text, images }) => {
    return (
        <div className='StackCompanies__main--container-card'>
            <p className="StackCompanies__main--container-card--heading">
                {title}
            </p>
            <p className="StackCompanies__main--container-card--text">
                {text}
            </p>

            <div className="StackCompanies__main--container-card-companies">
                <div className="StackCompanies__main--container-card-companies--top">
                    <img src={images[0]} alt="company" />
                    <img src={images[1]} alt="company" />
                </div>

                <div className="StackCompanies__main--container-card-companies--middle">
                    <img src={images[2]} alt="company" />
                </div>

                <div className="StackCompanies__main--container-card-companies--bottom">
                    <img src={images[3]} alt="company" />
                    <img src={images[4]} alt="company" />
                </div>
            </div>
        </div>
    )
}

export default StackCompaniesCard
