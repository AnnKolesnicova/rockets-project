import * as React from 'react';
import cx from 'classnames';
import { RocketListQuery } from '../../generated/graphql';
import { RocketListContainerProps } from './RocketListContainer';
import styles from './RocketList.module.css';

interface RocketListProps extends RocketListContainerProps {
  rockets?: RocketListQuery["rockets"]
}

const RocketList: React.FC<RocketListProps> = ({ rockets, handleIdChange, activeId}) => (
  <div className={styles.rocketList}>
    <ul className={styles.items}>
      {rockets && rockets.length
        ? (
          rockets.map((rocket, i) => (
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
          ))
        )
        : <div className={styles.resultsError}>No results. Please, try again</div>
      }
    </ul>
  </div>
);

export default RocketList;
