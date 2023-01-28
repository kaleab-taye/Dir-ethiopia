import React from 'react'
import './localButton.scss'

export default function LocalButton({placeholder}:{placeholder : string}) : JSX.Element {
  return (
    <div className='buttonComponent'>

        <div className='buttonComponent-content'>{placeholder}</div>
    </div>
  )
}
