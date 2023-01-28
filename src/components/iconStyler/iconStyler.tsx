import React from 'react'
import { IconContext } from 'react-icons'

export default function IconStyler({color,className,children}:{color?:string,className?:string,children:JSX.Element}) : JSX.Element {
    /* styler component for icons from react-icon */

    interface valueType  {
        color?: string ,
        className? : string
    }

    const value : valueType ={}

    if (color != null) {
        value.color=color;
    }

    if (className != null) {
        value.className=className;
    }


  return (
    <div data-testid='icon-styler'>
        <IconContext.Provider value={value}>
            <div>
                {children}
            </div>
        </IconContext.Provider>
    </div>
  )
}
