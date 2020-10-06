import gql from "graphql-tag";

export const Launch = gql`
  query Launches {
    launches {
      flight_number
      mission_name
      launch_year
      launch_success
    }
  }
`;
