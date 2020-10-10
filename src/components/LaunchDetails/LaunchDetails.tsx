import React from "react";
import { LaunchDetailsQuery } from '../../generated/graphql'

interface Props {
    data: LaunchDetailsQuery
}

const LaunchDetails: React.FC<Props> = ({ data }) => {
    return (
        <div>
            <h1>{data.launch?.mission_name}</h1>
        </div>
    )
}

export default LaunchDetails