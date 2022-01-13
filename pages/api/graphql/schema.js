import { gql } from "apollo-server-micro";

export default gql`
  type User {
    id: ID
  }

  type Country {
    id: ID
    code: String
    name: String
    emoji: String
  }

  type Query {
    getUser: User
    countries: [Country]
  }
`;
