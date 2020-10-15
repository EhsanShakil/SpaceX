import React from "react";
import { LaunchDetailsQuery } from '../../generated/graphql'
import './launchdetails.css'

interface Props {
    data: LaunchDetailsQuery
}

const LaunchDetails: React.FC<Props> = ({ data }) => {
    return (
        <div>
            <h1>Mission Name: {data.launch?.mission_name}</h1>
        </div>
    )
}

export default LaunchDetails