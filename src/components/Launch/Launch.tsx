import React from "react";
import { LaunchesQuery } from "../../generated/graphql";
import './style.css'

interface Props {
  data: LaunchesQuery;
}
const Launch: React.FC<Props> = ({ data }: any) => {
  return (
    <div>
      <h1>SpaceX data</h1>
      {data.launches?.map((details: any, id: any) => {
        return (
          <div key={id} className='container'>
            <h3>Flight Number: {details?.flight_number}</h3>
            <h3>Mission Name: {details?.mission_name}</h3>
            <h3>Launch Year: {details?.launch_year}</h3>
          </div>
        );
      })}
        </div>

  );
};
export default Launch;
