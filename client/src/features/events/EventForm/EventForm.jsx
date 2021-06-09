import React, {useState} from 'react';
import {Button, Form, Header, Segment} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import cuid from 'cuid';
import {useDispatch, useSelector} from 'react-redux';
import {updateEvent, createEvent} from '../actions';
import moment from 'moment';

const EventForm = ({match, history}) => {
  const dispatch = useDispatch();
  const selectedEvent = useSelector((state) =>
    state.event.events.find((event) => event.id === match.params.id)
  );

  const initialFormState = selectedEvent ?? {
    title: '',
    category: '',
    description: '',
    city: '',
    venue: '',
    date: '',
  };

  const [formState, setFormState] = useState(initialFormState);

  const handleInputChange = (e) => {
    const {name, value} = e.target;

    setFormState({...formState, [name]: value});
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const eventDate = formState.date;
    const presentDate = moment().format('YYYY-MM-DD');

    // const validEventDate = moment(eventDate).isAfter(presentDate);

    selectedEvent
      ? dispatch(updateEvent({...selectedEvent, ...formState}))
      : dispatch(
          createEvent({
            ...formState,
            id: cuid(),
            hostedBy: 'Bob',
            attendees: [],
            hostPhotoURL: '/assets/user.png',
          })
        );

    history.push('/events');
  };

  const {title, category, description, city, venue, date} = formState;
  return (
    <Segment clearing>
      <Header content={selectedEvent ? 'Edit the event' : 'Create new event'} />
      <Form onSubmit={handleFormSubmit}>
        <Form.Field>
          <input
            type="text"
            placeholder="Event title"
            name="title"
            value={title}
            onChange={handleInputChange}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            placeholder="Category"
            name="category"
            value={category}
            onChange={handleInputChange}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            placeholder="Description"
            name="description"
            value={description}
            onChange={handleInputChange}
          />
        </Form.Field>

        <Form.Field>
          <input
            type="text"
            placeholder="City"
            name="city"
            value={city}
            onChange={handleInputChange}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            placeholder="Venue"
            name="venue"
            value={venue}
            onChange={handleInputChange}
          />
        </Form.Field>
        <Form.Field style={{position: 'relative'}}>
          <input
            type="date"
            placeholder="Date"
            name="date"
            value={date}
            onChange={handleInputChange}
          />
          <div
            style={{
              position: 'absolute',
              top: 5,
              left: 15,
              width: '50%',
              background: 'white',
              height: '80%',
              display: 'flex',
              alignItems: 'center',
              fontWeight: 'bold',
            }}
          >
            {formState.date === '' ? (
              <div style={{color: '#c7ccda', fontWeight: 100}}>Date</div>
            ) : (
              moment(formState.date).format('M/D/YYYY')
            )}
          </div>
        </Form.Field>
        <Button type="submit" floated="right" positive content="Submit" />
        <Button
          as={Link}
          to="/events"
          type="submit"
          floated="right"
          content="Cancel"
        />
      </Form>
    </Segment>
  );
};

export default EventForm;
