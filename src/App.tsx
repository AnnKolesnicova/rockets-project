import React from 'react';
import { Helmet } from 'react-helmet';
import RocketList from './components/RocketList';
import Rocket from './components/Rocket';

import './App.css';

const App = () => {
  const [id, setId] = React.useState('starship');
  const handleIdChange = React.useCallback(newId => {
    setId(newId);
  }, []);

  return (
    <main className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Space X Rockets Pet Project</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <nav className="list">
        <RocketList handleIdChange={handleIdChange} activeId={id}/>
      </nav>
      <section className="page">
        <Rocket id={id} />
      </section>
    </main>
  );
};

export default App;
