import React from 'react'
import {Link} from 'react-router-dom'

export default function PageNotFound():JSX.Element {
  return (<>
    <div>pageNotFound</div>
  <Link to='/admin'>go to admin page</Link>
  </>
  )
}
