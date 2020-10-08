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
            <li>{details?.mission_name}</li>
          </div>
        );
      })}
    </div>
  );
};
export default Launch;
