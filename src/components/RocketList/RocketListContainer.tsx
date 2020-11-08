import React from 'react';
import { useRocketListQuery } from '../../generated/graphql';
import RocketList from './RocketList';
import Loading from '../../lib/components/Loading/Loading';
import Input from '../../lib/components/Input/Input';
import styles from './RocketList.module.css';

export interface RocketListContainerProps {
  handleIdChange: (newId: string) => void;
  activeId?: string;
}

const RocketListContainer: React.FC<RocketListContainerProps> = ({ handleIdChange, activeId }) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const { data, error, loading } = useRocketListQuery();

  const handleChange = (e: Event & { target: HTMLInputElement }) => {
    e.preventDefault();
    setSearchQuery(e.target.value);
  };

  React.useEffect(() => {
    const list = !loading && data && data.rockets.filter(rocket =>
      Object.values(rocket).toString().includes(searchQuery)
    );
    setSearchResults(list as any);
  }, [data, searchQuery]);

  if (loading) return <Loading />
  if (error || !data) return <div>ERROR</div>;
  if (data && !activeId) handleIdChange(data.rockets[0].rocket_id as string);

  return (
    <div className={styles.container}>
      <h3>Rockets</h3>
      <form className={styles.form}>
        <Input
          handleChange={handleChange}
          placeholder="Rocket search"
        />
      </form>
      <RocketList
        rockets={searchResults}
        handleIdChange={handleIdChange}
        activeId={activeId}
      />
    </div>
  )
};

export default RocketListContainer;
