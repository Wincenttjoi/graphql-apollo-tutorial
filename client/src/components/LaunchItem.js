import React from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

export default function LaunchItem({
  launch: {
    flight_number,
    mission_name,
    launch_date_local,
    launch_success
  }
}) {
  return (
    <div>
      <h1>Mission name: <span className={classNames({
        'text-success': launch_success,
        'text-danger': !launch_success
      })}>{mission_name}</span></h1>
      <p>Date: {launch_date_local}</p>
      <Link to={`/launch/${flight_number}`}>Launch Details</Link>
    </div>
  )
}
