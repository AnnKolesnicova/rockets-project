import * as React from 'react';
import { useRocketQuery } from '../../generated/graphql';
import Rocket from './Rocket';
import Loading from '../../lib/components/Loading/Loading';

interface RocketContainerProps {
  id: string;
}

const RocketContainer = ({ id }: RocketContainerProps) => {
  const { data, error, loading } = useRocketQuery({
    variables: { id },
  });

  if (loading) return <Loading />;
  if (error) return <div>ERROR</div>;
  if (!data) return <div>Unexpected error! Please, select a rocket from the left panel</div>;

  return <Rocket data={data} />;
};

export default RocketContainer;
