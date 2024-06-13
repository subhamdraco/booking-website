import React from 'react'

export default function BottomTracker(props) {

  return (
      <div className="bottom__tracker">
        <span className={props.cls === 'home' ? 'active' : undefined}></span>
        <span className={props.cls === 'flights' ? 'active' : ''}></span>
        <span className={props.cls === 'hotels' ? 'active' : ''}></span>
        <span className={props.cls=== 'buses' ? 'active' : ''}></span>
        <span className={props.cls === 'packages' ? 'active' : ''}></span>
     </div>
  )
}
