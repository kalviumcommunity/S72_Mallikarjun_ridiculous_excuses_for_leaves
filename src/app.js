import React from 'react';
import ExcuseComponent from './ExcuseComponent';

const dummyExcuse = {
  title: 'Unicorn Sighting',
  reason: 'I need to take the day off to search for the magical unicorn I saw in my backyard.'
};

const App = () => {
  return (
    <div>
      <ExcuseComponent excuse={dummyExcuse} />
    </div>
  );
};

export default App;
