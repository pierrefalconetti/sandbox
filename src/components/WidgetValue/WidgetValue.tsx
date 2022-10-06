import React from 'react';
import './WidgetValue.scss';


export interface Template {

  }
  
  function WidgetValue(props: Template) {
    return (
      <div className="WidgetTemplate">
        Hello World!
      </div>
    )
  }

  export default WidgetValue;