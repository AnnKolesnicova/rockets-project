import * as React from 'react';
import { useRocketListQuery} from '../../generated/graphql';
import RocketList, {  } from './RocketList';
import Loading from '../../lib/Loading';

export interface RocketListContainerProps {
  handleIdChange: (newId: string) => void;
  activeId?: string;
}

const RocketListContainer = (props: RocketListContainerProps) => {
  const { data, error, loading } = useRocketListQuery();
  if (loading) return <Loading />
  if (error || !data) return <div>ERROR</div>;

  return <RocketList data={data} {...props} />;
};

export default RocketListContainer;
