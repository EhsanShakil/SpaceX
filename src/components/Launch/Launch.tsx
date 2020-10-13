import React from "react";
import { LaunchesQuery } from "../../generated/graphql";
import "./style.css";

export interface OwnProps {
  handleChangeId: (newId: number) => void;
}
interface Props extends OwnProps {
  data: LaunchesQuery;
}
const Launch: React.FC<Props> = ({ data , handleChangeId }) => {
  return (
    <div>
      <h1>SpaceX data</h1>
      {data.launches?.map((details: any, id: any) => {
        return (
          <div
            key={id}
            className="container"
            onClick={() => handleChangeId(details.flight_number)}
          >
            <div>
              {details?.links.flickr_images.map((image: any, index: any) => (
                <img
                  key={index}
                  src={image}
                  alt="spacex"
                  width="100px"
                  height="100px"
                />
              ))}
            </div>
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
