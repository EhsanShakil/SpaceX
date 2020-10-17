import React from "react";
import { LaunchDetailsQuery } from "../../generated/graphql";
import "./launchdetails.css";

interface Props {
  data: LaunchDetailsQuery;
}

const LaunchDetails: React.FC<Props> = ({ data }) => {
  return (
    <div className="launchesDetails">
      <dl>
        <dt>
          <h2>Mission Name:</h2>
        </dt>
        <dd>{data.launch?.mission_name}</dd>
      </dl>
      <dl>
        <dt>
          <h2>Launch Site:</h2>
        </dt>
        <dd>{data.launch?.launch_site?.site_name}</dd>
      </dl>
      <dl>
        <dt>
          <h2>Launch Year:</h2>
        </dt>
        <dd>{data.launch?.launch_year}</dd>
      </dl>
      <dl>
        <dt>
          <h2>Rocket Name:</h2>
        </dt>
        <dd>{data.launch?.rocket?.rocket_name}</dd>
      </dl>
      <dl>
        <dt>
          <h2>Rocket Type:</h2>
        </dt>
        <dd>{data.launch?.rocket?.rocket_type}</dd>
      </dl>
      <dl>
        <dt>
          <h2>Details:</h2>
        </dt>
        <dd>{data.launch?.details}</dd>
      </dl>
      <dl>
        <dt>
          <h2>Pictures:</h2>
        </dt>
        <dd>
          {data.launch?.links?.flickr_images?.map((images, index) => {
            return (
              <img
                src={images?.toString()}
                width="200px"
                height="200px"
                key={index}
                alt="spacex"
              />
            );
          })}
        </dd>
          </dl>
           <dl>
        <dt>
          <h2>Videos:</h2>
        </dt>
        <dd>
          {data.launch?.links?.flickr_images?.map((images, index) => {
            return (
              <img
                src={images?.toString()}
                width="200px"
                height="200px"
                key={index}
                alt="spacex"
              />
            );
          })}
        </dd>
      </dl>
      {console.log(data)}
    </div>
  );
};

export default LaunchDetails;
