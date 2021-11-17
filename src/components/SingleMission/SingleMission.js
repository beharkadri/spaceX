import { useQuery, gql } from '@apollo/client';
import { useLocation } from 'react-router';

import Layout from '../layout/Layout';
import Loading from '../Loading/Loading';
import SingleMissionRenderer from './components/SingleMissionRenderer';

const GET_MISSION = gql`
  query Mission($missionID: ID!) {
    launch(id: $missionID) {
      mission_name
      details
      launch_date_local
      links {
        flickr_images
        video_link
        article_link
      }
      rocket {
        rocket {
          name
          description
          height {
            meters
          }
          mass {
            kg
          }
          diameter {
            meters
          }
        }
      }
      launch_site {
        site_name_long
      }
      launch_success
    }
  }
`;

const SingleMission = () => {
  const { pathname } = useLocation();

  const missionID = pathname.split('/')[2];

  const { loading, error, data } = useQuery(GET_MISSION, {
    variables: { missionID: missionID },
  });

  if (loading) {
    return (
      <Layout>
        <Loading />
      </Layout>
    );
  }
  if (error) {
    console.log(error);
    return <p>Error :(</p>;
  }

  //Placeholder for missing pictures
  const imageSrc =
    data.launch.links.flickr_images.length === 0
      ? 'https://live.staticflickr.com/65535/51686847614_28654cc008_m.jpg'
      : data.launch.links.flickr_images[0];

  //Placeholder for missing details
  const description =
    data.launch.details !== null
      ? data.launch.details
      : 'Lorem ipsum dolor sit amet consectetur adipiscing elit, iaculis morbi id neque condimentum lectus. Viverra dis imperdiet habitant erat fermentum molestie egestas, vivamus varius praesent eros mi convallis vehic...';

  const { launch } = data;
  return (
    <Layout>
      <SingleMissionRenderer
        imageSrc={imageSrc}
        missionName={launch.mission_name}
        missionDescription={description}
        rocket={launch.rocket.rocket}
        launchSite={launch.launch_site.site_name_long}
        launchTime={launch.launch_date_local}
        launchSuccess={launch.launch_success}
        articleLink={launch.links.article_link}
        videoLink={launch.links.video_link}
      />
    </Layout>
  );
};

export default SingleMission;
