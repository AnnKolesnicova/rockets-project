import gql from 'graphql-tag';

export const QUERY_ROCKET_LIST = gql`
  query RocketList {
    rockets {
      first_flight
      country
      rocket_name
      rocket_id
    }
  }
`;
