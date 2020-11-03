import * as React from 'react';
import { useRocketListQuery } from '../../generated/graphql';
import RocketList, { OwnProps } from './RocketList';
import Loading from '../../lib/Loading';

const RocketListContainer = (props: OwnProps) => {
  const { data, error, loading } = useRocketListQuery();
  if (loading) return <Loading />
  if (error || !data) return <div>ERROR</div>;

  return <RocketList data={data} {...props} />;
};

export default RocketListContainer;
