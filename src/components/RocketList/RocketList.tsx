import * as React from 'react';
import cx from 'classnames';
import { RocketListQuery } from '../../generated/graphql';
import './styles.css';

export interface OwnProps {
  handleIdChange: (newId: string) => void;
  activeId?: string;
}

interface Props extends OwnProps {
  data: RocketListQuery;
}

const currentClassName = 'rocketList';

const RocketList: React.FC<Props> = ({data, handleIdChange, activeId}) => (
  <div className={currentClassName}>
    <h3 className={`${currentClassName}_heading`}>Rockets</h3>
    <ul className={`${currentClassName}_items`}>
      {!!data.rockets && data.rockets.map((rocket, i) => !!rocket && (
          <li
            key={i}
            className={cx(`${currentClassName}_item`, {
              [`${currentClassName}_active_item`]: activeId === rocket.rocket_id
            })}
            onClick={() => handleIdChange(rocket.rocket_id!)}
          >
            <span>{rocket.rocket_name}</span>
            <div className={`${currentClassName}_description`}>
              <span>{rocket.country}</span> <span>({rocket.first_flight})</span>
            </div>
          </li>
        ),
      )}
    </ul>
  </div>
);

export default RocketList;
