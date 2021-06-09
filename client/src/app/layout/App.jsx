import React from 'react';
import './styles.css';
import Navbar from '../../features/nav/Navbar';
import EventDashboard from '../../features/events/EventDashboard/EventDashboard';
import {Container} from 'semantic-ui-react';
import {Route, useLocation} from 'react-router-dom';
import Home from '../../features/home/Home';
import EventDetailsPage from '../../features/events/EventDetails/EventDetailsPage';
import EventForm from '../../features/events/EventForm/EventForm';
import Sandbox from '../../features/sandbox/Sandbox';

function App() {
  const {key} = useLocation();

  return (
    <>
      <Route exact path="/" component={Home} />
      <Route
        path={'/(.+)'}
        render={() => (
          <>
            <Navbar />
            <Container className="main">
            <Route exact path="/events" component={EventDashboard} />
              <Route exact path="/sandbox" component={Sandbox} />
              <Route path="/events/:id" component={EventDetailsPage} />
              <Route
                path={['/createEvent', '/manage/:id']}
                component={EventForm}
                key={key}
              />
            </Container>
          </>
        )}
      />
    </>
  );
}

export default App;
