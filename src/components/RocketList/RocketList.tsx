import * as React from 'react';
import cx from 'classnames';
import { RocketListQuery } from '../../generated/graphql';
import { RocketListContainerProps } from './RocketListContainer';
import styles from './RocketList.module.css';

interface RocketListProps extends RocketListContainerProps {
  data: RocketListQuery;
}

const RocketList: React.FC<RocketListProps> = ({data, handleIdChange, activeId}) => (
  <div className={styles.rocketList}>
    <h3 className={styles.heading}>Rockets</h3>
    <ul className={styles.items}>
      {!!data.rockets && data.rockets.map((rocket, i) => !!rocket && (
          <li
            key={i}
            className={cx(styles.item, {
              [styles.active_item]: activeId === rocket.rocket_id
            })}
            onClick={() => handleIdChange(rocket.rocket_id!)}
          >
            <span>{rocket.rocket_name}</span>
            <div className={styles.description}>
              <span>{rocket.country}</span> <span>({rocket.first_flight})</span>
            </div>
          </li>
        ),
      )}
    </ul>
  </div>
);

export default RocketList;
