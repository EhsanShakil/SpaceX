import React, { useEffect } from "react";
import { useLaunchDetailsQuery } from "../../generated/graphql";
import LaunchDetails from "./LaunchDetails";

interface OwnProps {
  id: number;
}

const LaunchDetailsContainer = ({ id }: OwnProps) => {
  const { loading, error, data, refetch } = useLaunchDetailsQuery({
    variables: { id: String(id) },
  });
  useEffect(() => {
    refetch();
  }, [id]);

  if (loading) return <h1>Data is loading</h1>;

  if (error || !data) return <h1>There was an error no data found</h1>;

  return (
    <div>
      <LaunchDetails data={data} />
    </div>
  );
};

export default LaunchDetailsContainer;
