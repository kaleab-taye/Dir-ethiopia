import React from 'react';
import './settingsCategory.scss';

export default function SettingsCategory({header,children}:{header:string,children:JSX.Element}) : JSX.Element {
  return (
    <div className='settings-settingsCategory'>
        <div className='settings-settingsCategory-header'>
            {header}
        </div>
        <div className='settings-settingsCategory-body'>
            {children}
        </div>
    </div>
  )
}
