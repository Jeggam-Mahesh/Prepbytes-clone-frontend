import React from 'react'

const MetricsCard = ({ image, text, subtext }) => {
    return (
        <div className="IncomeSharingMetrics__main-container-item">
            <img src={image} alt="icon" className="IncomeSharingMetrics__main-container-item--img" />
            <div className="IncomeSharingMetrics__main-container-item-content">
                <p className="IncomeSharingMetrics__main-container-item-content--text">
                    {text}
                </p>
                <p className="IncomeSharingMetrics__main-container-item-content--subtext">
                    {subtext}
                </p>
            </div>
        </div>
    )
}

export default MetricsCard
