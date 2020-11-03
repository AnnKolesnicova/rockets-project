import gql from 'graphql-tag';

export const QUERY_ROCKET = gql`
  query Rocket($id: String!) {
    rocket(id: $id) {
      first_stage {
        fuel_amount_tons
      }
      second_stage {
        fuel_amount_tons
      }
      height {
        meters
      }
      diameter {
        meters
      }
      description
      rocket_name
      rocket_type
      first_flight
      flickr_images
      country
      company
      mass {
        kg
      }
    }
  }
`;
