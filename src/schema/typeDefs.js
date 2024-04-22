// src/schema/typeDefs.js
const { gql } = require('apollo-server');

const typeDefs = gql`
  type Event {
    id: ID!
    name: String!
    date: String!
    sportType: String!
    participants: [Participant!]
  }

  type Participant {
    id: ID!
    name: String!
  }

  type Query {
    listEvents: [Event!]!
    viewEventDetails(eventId: ID!): Event
  }

  type Mutation {
    createEvent(name: String!, date: String!, sportType: String!): Event
    registerParticipant(eventId: ID!, participantName: String!): Event
  }
`;

module.exports = typeDefs;
