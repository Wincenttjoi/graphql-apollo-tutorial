import React, {Fragment} from 'react'
import gql from 'graphql-tag'
import {Query} from 'react-apollo'
import LaunchItem from './LaunchItem'
import MissionKey from './MissionKey'

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

const Launches = () => {
  return (
    <Fragment>
      <h1>Launches</h1>
      <MissionKey />
      <Query query={LAUNCHES_QUERY}>
        {
          ({ loading, error, data }) => {
            if (loading) return <h4>loading...</h4>
            if (error) return console.log(error)
            console.log(data)
            return <Fragment>
              {
                data.launches.map(launch => (
                  <LaunchItem key={launch.flight_number} launch={launch} />
                ))
              }
            </Fragment>
          }
        }
      </Query>
    </Fragment>
  )
}

export default Launches
