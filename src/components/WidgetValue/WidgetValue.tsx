import React from 'react';
import './WidgetValue.scss';

export interface Template {
  children?: any;

}

function WidgetValue(props: Template) {
  return (
    <div className="WidgetTemplate">
      Sub card to be used inside another component.
    </div>
  )
}

export default WidgetValue;