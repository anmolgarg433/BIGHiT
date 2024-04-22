// src/schema/resolvers.js
let events = [];
let participantId = 0;
let eventId = 0;

const resolvers = {
  Query: {
    listEvents: () => events,
    viewEventDetails: (_, { eventId }) => events.find(event => event.id === eventId),
  },
  Mutation: {
    createEvent: (_, { name, date, sportType }) => {
      const newEvent = { id: `event_${eventId++}`, name, date, sportType, participants: [] };
      events.push(newEvent);
      return newEvent;
    },
    registerParticipant: (_, { eventId, participantName }) => {
      const event = events.find(event => event.id === eventId);
      if (!event) throw new Error("Event not found");
      const newParticipant = { id: `participant_${participantId++}`, name: participantName };
      event.participants.push(newParticipant);
      return event;
    },
  }
};

module.exports = resolvers;
