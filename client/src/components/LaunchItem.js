import React from 'react'

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
      <h1>Mission name: {mission_name}</h1>
      <p>Date: {launch_date_local}</p>
      <button>Launch Details</button>
    </div>
  )
}
