import gql from "graphql-tag";

export const LaunchDetails = gql`
  query LaunchDetails {
    launches {
      flight_number
      mission_name
      launch_year
      launch_success
      details
      launch_site {
        site_name
      }
      rocket {
        rocket_name
        rocket_type
      }
      links {
        video_link
        flickr_images
      }
    }
  }
`;
