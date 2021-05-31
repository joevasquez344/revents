import React, {useState} from 'react';
import './styles.css';
import Navbar from '../../features/nav/Navbar';
import EventDashboard from '../../features/events/EventDashboard/EventDashboard';
import {Container} from 'semantic-ui-react';

function App() {
  const [formOpen, setFormOpen] = useState(false);
  return (
    <>
      <Navbar setFormOpen={setFormOpen} />
      <Container className="main">
        <EventDashboard setFormOpen={setFormOpen} formOpen={formOpen} />
      </Container>
    </>
  );
}

export default App;
