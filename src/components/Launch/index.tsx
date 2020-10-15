import React from "react";
import { useLaunchesQuery } from "../../generated/graphql";
import Launch, {OwnProps} from "./Launch";
import "./launch.css";

const LaunchContainer = (props: OwnProps) => {
  const { loading, error, data } = useLaunchesQuery();

  if (loading) return <h1 className='loading'>Loading...</h1>;
  if (error || !data) return <h1 className='error'>Error data not found</h1>;

  return <Launch data={data} {...props} />;
};

export default LaunchContainer;
