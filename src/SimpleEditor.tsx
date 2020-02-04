import React, { PureComponent } from 'react';
import { FormField } from '@grafana/ui';
import { PanelEditorProps } from '@grafana/data';
import './styles.scss';

import { SimpleOptions } from './types';

export class SimpleEditor extends PureComponent<PanelEditorProps<SimpleOptions>> {
  onTextChanged = ({ target }: any) => {
    this.props.onOptionsChange({ ...this.props.options, url: target.value });
  };

  onTitleChange = (event: any, dataPoint: number) => {
    switch (dataPoint) {
      case 1:
        this.props.onOptionsChange({ ...this.props.options, title: event.target.value });
        break;
      case 2:
        this.props.onOptionsChange({ ...this.props.options, title2: event.target.value });
        break;
      case 3:
        this.props.onOptionsChange({ ...this.props.options, title3: event.target.value });
        break;
      case 4:
        this.props.onOptionsChange({ ...this.props.options, title4: event.target.value });
        break;
      case 5:
        this.props.onOptionsChange({ ...this.props.options, title5: event.target.value });
        break;
      default:
        break;
    }
  };

  onXChanged = (event: any, dataPoint: number) => {
    switch (dataPoint) {
      case 1:
        this.props.onOptionsChange({ ...this.props.options, x: event.target.value });
        break;
      case 2:
        this.props.onOptionsChange({ ...this.props.options, x2: event.target.value });
        break;
      case 3:
        this.props.onOptionsChange({ ...this.props.options, x3: event.target.value });
        break;
      case 4:
        this.props.onOptionsChange({ ...this.props.options, x4: event.target.value });
        break;
      case 5:
        this.props.onOptionsChange({ ...this.props.options, x5: event.target.value });
        break;
      default:
        break;
    }
  };  

  onYChanged = (event: any, dataPoint: number) => {
    switch (dataPoint) {
      case 1:
        this.props.onOptionsChange({ ...this.props.options, y: event.target.value });
        break;
      case 2:
        this.props.onOptionsChange({ ...this.props.options, y2: event.target.value });
        break;
      case 3:
        this.props.onOptionsChange({ ...this.props.options, y3: event.target.value });
        break;
      case 4:
        this.props.onOptionsChange({ ...this.props.options, y4: event.target.value });
        break;
      case 5:
        this.props.onOptionsChange({ ...this.props.options, y5: event.target.value });
        break;
      default:
        break;
    }
  };

  onValueChange = (event: any, dataPoint: number) => {
    switch (dataPoint) {
      case 1:
        this.props.onOptionsChange({ ...this.props.options, value: event?.target.value});
        break;
      case 2:
        this.props.onOptionsChange({ ...this.props.options, value2: event?.target.value});
        break;
      case 3:
        this.props.onOptionsChange({ ...this.props.options, value3: event?.target.value});
        break;
      case 4:
        this.props.onOptionsChange({ ...this.props.options, value4: event?.target.value});
        break;
      case 5:
        this.props.onOptionsChange({ ...this.props.options, value5: event?.target.value})
        break;
      default:
        break;
    }
  };

  onMonitorAmountAdd = () => {
    this.props.onOptionsChange({ ...this.props.options, monitorAmount: this.props.options.monitorAmount + 1})
  };

  onMonitorAmountSubstract = () => {
    this.props.onOptionsChange({ ...this.props.options, monitorAmount: this.props.options.monitorAmount - 1})
  };

  render() {
    const { options } = this.props;

    return (
      <div className="section gf-form-group">
        <h5 className="section-heading">Picture</h5>
        <FormField label="Provide picture url" labelWidth={10} inputWidth={20} type="text" onChange={this.onTextChanged} value={options.url || ''} />
        <hr/>
        {this.props.options.monitorAmount > 0 && <div className="data-point-container">
          <h5 className="section-heading">{this.props.options.title || 'Data point 1'}</h5>
          <FormField label="Title" labelWidth={6} inputWidth={20} type="text" onChange={(event) => this.onTitleChange(event, 1)} value={options.title || ''} />
          <FormField label="x position" labelWidth={6} inputWidth={4} type="number" onChange={(event) => this.onXChanged(event, 1)} value={options.x || ''} />
          <FormField label="y position" labelWidth={6} inputWidth={4} type="number" onChange={(event) => this.onYChanged(event, 1)} value={options.y || ''} />
          <FormField label="Value" labelWidth={6} inputWidth={4} type="number" onChange={(event) => this.onValueChange(event, 1)} value={options.value || ''} />
        <hr/>
        </div>}
        {this.props.options.monitorAmount > 1 && <div className="data-point-container">
          <h5 className="section-heading">{this.props.options.title2 || 'Data point 2'}</h5>
          <FormField label="Title" labelWidth={6} inputWidth={20} type="text" onChange={(event) => this.onTitleChange(event, 2)} value={options.title2 || ''} />
          <FormField label="x position" labelWidth={6} inputWidth={4} type="number" onChange={(event) => this.onXChanged(event, 2)} value={options.x2 || ''} />
          <FormField label="y position" labelWidth={6} inputWidth={4} type="number" onChange={(event) => this.onYChanged(event, 2)} value={options.y2 || ''} />
          <FormField label="Value" labelWidth={6} inputWidth={4} type="number" onChange={(event) => this.onValueChange(event, 2)} value={options.value2 || ''} />
        <hr/>
        </div>}
        {this.props.options.monitorAmount > 2 && <div className="data-point-container">
          <h5 className="section-heading">{this.props.options.title3 || 'Data point 3'}</h5>
          <FormField label="Title" labelWidth={6} inputWidth={20} type="text" onChange={(event) => this.onTitleChange(event, 3)} value={options.title3 || ''} />
          <FormField label="x position" labelWidth={6} inputWidth={4} type="number" onChange={(event) => this.onXChanged(event, 3)} value={options.x3 || ''} />
          <FormField label="y position" labelWidth={6} inputWidth={4} type="number" onChange={(event) => this.onYChanged(event, 3)} value={options.y3 || ''} />
          <FormField label="Value" labelWidth={6} inputWidth={4} type="number" onChange={(event) => this.onValueChange(event, 3)} value={options.value3 || ''} />
        <hr/>
        </div>}
        {this.props.options.monitorAmount > 3 && <div className="data-point-container">
          <h5 className="section-heading">{this.props.options.title4 || 'Data point 4'}</h5>
          <FormField label="Title" labelWidth={6} inputWidth={20} type="text" onChange={(event) => this.onTitleChange(event, 4)} value={options.title4 || ''} />
          <FormField label="x position" labelWidth={6} inputWidth={4} type="number" onChange={(event) => this.onXChanged(event, 4)} value={options.x4 || ''} />
          <FormField label="y position" labelWidth={6} inputWidth={4} type="number" onChange={(event) => this.onYChanged(event, 4)} value={options.y4 || ''} />
          <FormField label="Value" labelWidth={6} inputWidth={4} type="number" onChange={(event) => this.onValueChange(event, 4)} value={options.value4 || ''} />
        <hr/>
        </div>}
        {this.props.options.monitorAmount > 4 && <div className="data-point-container">
          <h5 className="section-heading">{this.props.options.title5 || 'Data point 5'}</h5>
          <FormField label="Title" labelWidth={6} inputWidth={20} type="text" onChange={(event) => this.onTitleChange(event, 5)} value={options.title5 || ''} />
          <FormField label="x position" labelWidth={6} inputWidth={4} type="number" onChange={(event) => this.onXChanged(event, 5)} value={options.x5 || ''} />
          <FormField label="y position" labelWidth={6} inputWidth={4} type="number" onChange={(event) => this.onYChanged(event, 5)} value={options.y5 || ''} />
          <FormField label="Value" labelWidth={6} inputWidth={4} type="number" onChange={(event) => this.onValueChange(event, 5)} value={options.value5 || ''} />
        <hr/>
        </div>}
        {this.props.options.monitorAmount < 5 && <button className="editor-button" type="button" onClick={this.onMonitorAmountAdd}>Add new monitor</button>}
        {this.props.options.monitorAmount > 0 && <button className="editor-button" type="button" onClick={this.onMonitorAmountSubstract}>Remove last monitor</button>}
      </div>
    );
  }
}
