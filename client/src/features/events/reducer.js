import {sampleData} from '../../app/api/sampleData';
import {CREATE_EVENT, DELETE_EVENT, UPDATE_EVENT} from './constants';

const initialState = {
  events: sampleData,
  eventDetails: null
};

const eventReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case CREATE_EVENT:
      return {
        ...state,
        events: [...state.events, payload],
      };
    case UPDATE_EVENT:
      return {
        ...state,
        events: state.events.map(event => event.id === payload.id ? payload : event),
      };
    case DELETE_EVENT:
      return {
        ...state,
        events: state.events.filter(event => event.id !== payload),
      };
    default:
      return state;
  }
};

export default eventReducer;
