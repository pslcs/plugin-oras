import React from 'react';
import './GaugeBar.scss'

interface GaugeBarProps {
    width: number;
    height: number;
    value: number;
}

const GaugeBar = ({width, height, value}: GaugeBarProps) => {
    if (value > 100) {
        value = 100;
    }
    return (
        <div className="gaugeBar-container" style={{width: `${width}px`, height: `${height}px`}} >
            <p className="gaugeBar-value">{value}</p>
            <div className='gaugeBar-arrow' style={{left: `${value * 0.8}px`, top: `5px`}} />
            <div className='gaugeBar-gauge'>
                <div className="gaugeBar-bar red" />
                <div className="gaugeBar-bar orange" />
                <div className="gaugeBar-bar yellow" />
                <div className="gaugeBar-bar green" />
            </div>
        </div>
    )
}

export default GaugeBar;