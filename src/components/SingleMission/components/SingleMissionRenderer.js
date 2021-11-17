import ReactPlayer from 'react-player';

import styles from './SingleMissionRenderer.module.scss';

const SingleMissionRenderer = ({
  imageSrc,
  missionName,
  missionDescription,
  rocket,
  launchSite,
  launchTime,
  launchSuccess,
  articleLink,
  videoLink,
}) => {
  return (
    <div className={styles.mission}>
      <div className={styles.top}>
        <div className={styles.left}>
          <img src={imageSrc} alt='rocket' />
        </div>

        <div className={styles.right}>
          <h1>{missionName}</h1>
          <p>{missionDescription}</p>
          <br />
          <h2>Launch Rocket: {rocket.name}</h2>
          <p>
            {rocket.description} It's a &nbsp;
            {rocket.height.meters} meter tall &nbsp;
            {rocket.mass.kg} kilograms heavy rocket with a diameter of &nbsp;
            {rocket.diameter.meters} meters.
          </p>
          <p>
            It launched at {launchTime} from the {launchSite} launching site{' '}
            {launchSuccess === true
              ? 'successfully.'
              : 'but the launch was an unfortunate failure.'}
          </p>
          {articleLink !== null ? (
            <h4>
              For more information:{' '}
              <a href={articleLink} target='_blank' rel='noreferrer'>
                read the article
              </a>{' '}
              {videoLink !== null &&
                'or watch the video provided by SpaceX down below.'}
            </h4>
          ) : (
            videoLink !== null && (
              <h4>
                For more information watch the video provided by SpaceX down
                below.
              </h4>
            )
          )}
        </div>
      </div>
      {videoLink !== null && (
        <div className={styles.bottom}>
          <ReactPlayer url={videoLink} width='100%' height='500px' />
        </div>
      )}
    </div>
  );
};

export default SingleMissionRenderer;
