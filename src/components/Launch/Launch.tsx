import React from "react";
import { LaunchesQuery } from "../../generated/graphql";
import "./launch.css";
import { Link } from "react-router-dom";
export interface OwnProps {
  handleChangeId: (newId: number) => void;
}
interface Props extends OwnProps {
  data: LaunchesQuery;
}
const image = require("../../rocket.png");

const Launch: React.FC<Props> = ({ data, handleChangeId }) => {
  return (
    <div>
      <h1 style={{ display: "flex", justifyContent: "center", color: "white" }}>
        <img src={image} alt="rocket" width='50px' height='50px'/> SpaceX Launches
      </h1>
      <div className="header">
        {data.launches?.map((details: any, id: any) => {
          return (
            <Link to={`${details?.mission_name}`} className="container">
              <div
                key={id}
                onClick={() => handleChangeId(details.flight_number!)}
              >
                <h3>Flight Number: {details?.flight_number}</h3>
                <h3>Mission Name: {details?.mission_name}</h3>
                <h3>Launch Year: {details?.launch_year}</h3>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Launch;
