import React from "react";
import { LaunchDetailsQuery } from '../../generated/graphql'
import './launchdetails.css'

interface Props {
    data: LaunchDetailsQuery
}

const LaunchDetails: React.FC<Props> = ({ data }) => {
    return (
        <div className='launchesDetails'>
            <h1>Mission Name: {data.launch?.mission_name}</h1>
            <h1>Launch Site: {data.launch?.launch_site?.site_name}</h1>
            <h1>Launch Year: {data.launch?.launch_year}</h1>
            <h1>Launch Year: {data.launch?.launch_success}</h1>
            <h1>Rocket Name: {data.launch?.rocket?.rocket_name}</h1>

            {console.log(data)}
        </div>
    )
}

export default LaunchDetails