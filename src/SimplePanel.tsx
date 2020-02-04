import React, { PureComponent } from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions  } from 'types';
import GaugeBar from './Components/GaugeBar/GaugeBar';
import Gauge from './Components/Gauge/Gauge';

import './styles.scss';

interface Props extends PanelProps<SimpleOptions> {}

export class SimplePanel extends PureComponent<Props> {
  static scrollable = true;

  render() {
    const { options, data, width, height } = this.props;
console.log(data)
    return (
      <div
        style={{
          position: 'relative',
          width,
          height,
        }}
      >
        <div>
          <img width="1000px" height="auto" src={options.url} style={{position: 'absolute'}} />

          <div 
            className="output-container" 
            style={{
              position: 'absolute',
              top: `${options.y}px`,
              left: `${options.x}px`,
              display: options.monitorAmount > 0 ? 'unset' : 'none'
            }}
          >
            <p className="output-name">{options.title}</p>
            <GaugeBar width={100} height={50} value={options.value} />
          </div>

          <div 
            className="output-container" 
            style={{
              position: 'absolute',
              top: `${options.y2}px`,
              left: `${options.x2}px`,
              display: options.monitorAmount > 1 ? 'unset' : 'none'
            }}
          >
            <p className="output-name">{options.title2}</p>
            <GaugeBar width={100} height={50} value={options.value2} />
          </div>
          
          <div  
            className="output-container" 
            style={{
              position: 'absolute',
              top: `${options.y3}px`,
              left: `${options.x3}px`,
              display: options.monitorAmount > 2 ? 'unset' : 'none'
            }}
          >
            <p className="output-name">{options.title3}</p>
            <GaugeBar width={100} height={50} value={options.value3} />
          </div>
          
          <div 
            className="output-container" 
            style={{
              position: 'absolute',
              top: `${options.y4}px`,
              left: `${options.x4}px`,
              display: options.monitorAmount > 3 ? 'unset' : 'none'
            }}
          >
            <p className="output-name">{options.title4}</p>
            <GaugeBar width={100} height={50} value={options.value4} />
          </div>
          
          <div 
            className="output-container" 
            style={{
              position: 'absolute',
              top: `${options.y5}px`,
              left: `${options.x5}px`,
              display: options.monitorAmount > 4 ? 'unset' : 'none'
            }}
          >
            <p className="output-name">{options.title}</p>
            <GaugeBar width={100} height={50} value={options.value5} />
          </div>

          <div className='dashboard'>
            {options.monitorAmount > 0 && (
              <div className='single-dashboard'>
                <Gauge value={options.value} size={75} name={options.title} />
              </div>)}
            {options.monitorAmount > 1 && (
              <div className='single-dashboard'>
                <Gauge value={options.value2} size={75} name={options.title2} />
              </div>)}
            {options.monitorAmount > 2 && (
              <div className='single-dashboard'>
                <Gauge value={options.value3} size={75} name={options.title3} />
              </div>)}
            {options.monitorAmount > 3 && (
              <div className='single-dashboard'>
                <Gauge value={options.value4} size={75} name={options.title4} />
              </div>)}
            {options.monitorAmount > 4 && (
              <div className='single-dashboard'>
                <Gauge value={options.value5} size={75} name={options.title5} />
              </div>)}
          </div>
          
        </div>

          {/* <div>Count: {data.series.length}</div> */}
      </div>
    );
  }
}
