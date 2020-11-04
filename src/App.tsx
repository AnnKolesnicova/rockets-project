import React from 'react';
import RocketList from './components/RocketList';
import Rocket from './components/Rocket';

import styles from './App.module.css';


const App = () => {
  const [id, setId] = React.useState('');

  return (
    <main className={styles.app}>
      <nav className={styles.list}>
        <RocketList handleIdChange={setId} activeId={id}/>
      </nav>
      <section className={styles.page}>
        <Rocket id={id} />
      </section>
    </main>
  );
};

export default App;
