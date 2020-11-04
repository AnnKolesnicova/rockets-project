import * as React from 'react';
import { RocketQuery } from '../../generated/graphql';
import styles from './Rocket.module.css';

interface RocketProps {
  data: RocketQuery;
}

const Rocket: React.FC<RocketProps> = ({data}) => {
  if (!data.rocket) return <div>No rocket available</div>;
  const { rocket } = data;

  return (
    <div className={styles.rocketPage}>
      <h1>
        {rocket.rocket_name} {rocket.rocket_type}
      </h1>
      <div className={styles.description}>
        {rocket.country} ({rocket.company}) {rocket.first_flight}
      </div>
      <p>{rocket.description}</p>
      <div className={styles.about}>
        {rocket.mass &&
          <p className={styles.item}>
            <strong>Mass:</strong> {rocket.mass.kg} kg
          </p>
        }
        {rocket.height &&
          <p className={styles.item}>
            <strong>Height:</strong> {rocket.height.meters} meters
          </p>
        }
        {rocket.diameter &&
         <p className={styles.item}>
           <strong>Diameter:</strong> {rocket.diameter.meters} meters
         </p>
        }
        <div className={styles.stages}>
          {rocket.first_stage &&
          <div>
            <h3 className={styles.heading}>First stage</h3>
            <p className={styles.item}>
              <strong>Fuel amount tons:</strong> {rocket.first_stage.fuel_amount_tons} kg
            </p>
          </div>
          }
          {rocket.second_stage &&
          <div>
            <h3 className={styles.heading}>Second stage</h3>
            <p className={styles.item}>
              <strong>Fuel amount tons:</strong> {rocket.second_stage.fuel_amount_tons} kg
            </p>
          </div>
          }
        </div>
      </div>
      {!!rocket.flickr_images && (
        <div className={styles.images}>
          {rocket.flickr_images.map(image =>
            image && <img src={image} className={styles.image} key={image} />,
          )}
        </div>
      )}
    </div>
  );
};

export default Rocket;
