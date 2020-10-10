import React from "react";
import { LaunchesQuery } from "../../generated/graphql";

interface Props {
  data: LaunchesQuery;
}
const Launch: React.FC<Props> = ({ data }: any) => {
  return (
    <div>
      <h1>SpaceX data</h1>
      {data.launches?.map((details: any, id: any) => {
        return (
          <div key={id}>
            <p>{details?.flight_number}</p>
            <p>{details?.mission_name}</p>
            <p>{details?.launch_year}</p>
            <p>{details?.launch_success}</p>
            <br />
          </div>
        );
      })}
    </div>
  );
};
export default Launch;
