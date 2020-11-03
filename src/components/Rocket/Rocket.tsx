import * as React from 'react';
import { RocketQuery } from '../../generated/graphql';
import './styles.css';

interface Props {
  data: RocketQuery;
}

const currentClassName = 'rocketPage';

const Rocket: React.FC<Props> = ({data}) => {
  if (!data.rocket) return <div>No rocket available</div>;
  const { rocket } = data;

  return (
    <div className={currentClassName}>
      <h1>
        {rocket.rocket_name} {rocket.rocket_type}
      </h1>
      <div className={`${currentClassName}_description`}>
        {rocket.country} ({rocket.company}) {rocket.first_flight}
      </div>
      <p>{rocket.description}</p>
      <div className={`${currentClassName}_about`}>
        {rocket.mass &&
          <p className={`${currentClassName}_item`}>
            <strong>Mass:</strong> {rocket.mass.kg} kg
          </p>
        }
        {rocket.height &&
          <p className={`${currentClassName}_item`}>
            <strong>Height:</strong> {rocket.height.meters} meters
          </p>
        }
        {rocket.diameter &&
         <p className={`${currentClassName}_item`}>
           <strong>Diameter:</strong> {rocket.diameter.meters} meters
         </p>
        }
        <div className={`${currentClassName}_stages`}>
          {rocket.first_stage &&
          <div>
            <h3 className={`${currentClassName}_heading`}>First stage</h3>
            <p className={`${currentClassName}_item`}>
              <strong>Fuel amount tons:</strong> {rocket.first_stage.fuel_amount_tons} kg
            </p>
          </div>
          }
          {rocket.second_stage &&
          <div>
            <h3 className={`${currentClassName}_heading`}>Second stage</h3>
            <p className={`${currentClassName}_item`}>
              <strong>Fuel amount tons:</strong> {rocket.second_stage.fuel_amount_tons} kg
            </p>
          </div>
          }
        </div>
      </div>
      {!!rocket.flickr_images && (
        <div className={`${currentClassName}_images`}>
          {rocket.flickr_images.map(image =>
            image && <img src={image} className={`${currentClassName}_image`} key={image} />,
          )}
        </div>
      )}
    </div>
  );
};

export default Rocket;
