import React from 'react';
import RocketList from './components/RocketList';
import Rocket from './components/Rocket';

import styles from './App.module.css';

const INITIAL_ROCKET_ID = 'starship';

const App = () => {
  const [id, setId] = React.useState(INITIAL_ROCKET_ID);
  const handleIdChange = React.useCallback(newId => {
    setId(newId);
  }, []);

  return (
    <main className={styles.app}>
      <nav className={styles.list}>
        <RocketList handleIdChange={handleIdChange} activeId={id}/>
      </nav>
      <section className={styles.page}>
        <Rocket id={id} />
      </section>
    </main>
  );
};

export default App;
