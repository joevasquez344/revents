import React from 'react';
import {Button, Icon, Item, List, Segment} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import EventListAttendee from './EventListAttendee';
import Moment from 'react-moment';
import {useDispatch} from 'react-redux';
import {deleteEvent} from '../actions';

const EventListItem = ({event}) => {
  const dispatch = useDispatch();
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size="tiny" circular src={event.hostPhotoURL} />
            <Item.Content>
              <Item.Header content={event.title} />
              <Item.Description>{event.hostedBy}</Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <span style={{marginRight: '5px'}}>
          <Icon name="clock" /> <Moment format="M/D/YYYY">{event.date}</Moment>
        </span>
        <span>
          {' '}
          <Icon name="marker" /> {event.venue}
        </span>
      </Segment>
      <Segment secondary>
        <List horizontal>
          {event.attendees.map((attendee) => (
            <EventListAttendee key={attendee.id} attendee={attendee} />
          ))}
        </List>
      </Segment>
      <Segment clearing>
        <div>{event.description}</div>
        <Button
          onClick={() => dispatch(deleteEvent(event.id))}
          color="red"
          floated="right"
          content="Delete"
        />
        <Button
          as={Link}
          to={`/events/${event.id}`}
          color="teal"
          floated="right"
          content="View"
        />
      </Segment>
    </Segment.Group>
  );
};

export default EventListItem;
