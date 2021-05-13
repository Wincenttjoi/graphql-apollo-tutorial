import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { Link } from 'react-router-dom'

const LAUNCH_QUERY = gql`
  query LaunchQuery($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      flight_number
      mission_name
      launch_year
      launch_success
      launch_date_local
      rocket{
        rocket_id
        rocket_name
        rocket_type
      }
    }
  }
`

function Launch(props) {
  let { flight_number } = props.match.params
  flight_number = parseInt(flight_number);
  console.log(props)
  return (
    <div>
      <Query query={LAUNCH_QUERY} variables={{flight_number}}>
        {
          (loading, error, data) => {

            if (loading) return <h4>loading...</h4>
            if (error) return console.log(error)            
            const { mission_name, 
              flight_number, 
              launch_year, 
              launch_success, 
              launch_date_local,
            rocket: {
              rocket_id,
              rocket_name,
              rocket_type
            }} = data.launch
            return <h1>
              Mission: {mission_name}
            </h1>
          }
        }
      </Query>
    </div>
  )
}

export default Launch;