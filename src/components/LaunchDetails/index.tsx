import React from 'react'
import { useLaunchDetailsQuery } from '../../generated/graphql'
import LaunchDetails from './LaunchDetails'

const LaunchDetailsContainer = () => {
    const {loading, error, data} = useLaunchDetailsQuery({variables: {id: "25"}})

    if (loading) return <h1>Data is loading</h1>
    
    if (error || !data) return <h1>There was an error no data found</h1>
    
    return (
        <div>
            <LaunchDetails data={data}/>
        </div>
    )

}

export default LaunchDetailsContainer