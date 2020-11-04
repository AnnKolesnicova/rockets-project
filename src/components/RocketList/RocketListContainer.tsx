import * as React from 'react';
import { useRocketListQuery } from '../../generated/graphql';
import RocketList from './RocketList';
import Loading from '../../lib/Loading';

export interface RocketListContainerProps {
  handleIdChange: (newId: string) => void;
  activeId?: string;
}

const RocketListContainer: React.FC<RocketListContainerProps> = ({ handleIdChange, activeId }) => {
  const { data, error, loading } = useRocketListQuery();
  if (loading) return <Loading />
  if (error || !data) return <div>ERROR</div>;

  if (!activeId) handleIdChange(data.rockets[0].rocket_id as string);

  return <RocketList data={data} handleIdChange={handleIdChange} activeId={activeId} />;
};

export default RocketListContainer;
