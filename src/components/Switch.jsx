import React from 'react';

import '../styles/switch.css';

const Switch = ({rounded = false, isToggled, onToggle}) => {
    return (
      <label className="switch">
          <input type="checkbox" checked={isToggled} onChange={onToggle} />
          <span className="slider rounded" />
      </label>
    )
}


export default Switch;