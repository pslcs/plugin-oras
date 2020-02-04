import React from 'react';
import './Gauge.scss'

interface GaugeProps {
    size: number;
    value: number;
    name: string;
}

const Gauge = ({value, size, name}: GaugeProps) => {
    value > 100 ? value = 100 : value;

    return (
      <div className="box gauge--1" style={{width: `${size}px`, height: `${size}px`}}>
        <div className="mask">
          <div className="semi-circle" />
          <div className="semi-circle--mask" style={{transform: `rotate(${value * 1.8}deg)`}} />
        </div>
        <span className='gauge-value'>{value}</span>
        <span className='gauge-name'>{name}</span>
      </div>
    )
}

export default Gauge;