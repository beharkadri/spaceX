import { useQuery, gql } from '@apollo/client';

import { Grid } from '@mui/material';
import Launch from './Launch';

const GET_ALL_MISSIONS = gql`
  query Feed($offset: Int, $limit: Int) {
    launchesPast(limit: $limit, offset: $offset) {
      id
      mission_name
      details
      launch_date_local
      launch_site {
        site_name_long
      }
      links {
        article_link
        video_link
        flickr_images
      }
      rocket {
        rocket {
          id
        }
      }
    }
  }
`;

const Launches = () => {
  const { loading, error, data, fetchMore } = useQuery(GET_ALL_MISSIONS, {
    variables: {
      offset: 0,
      limit: 10,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const clickHandler = () => {
    fetchMore({
      variables: {
        offset: data.launchesPast.length,
      },
    });
  };

  return (
    <>
      <div style={{ padding: '30px' }}>
        <Grid
          container
          direction='row'
          justifyContent='center'
          alignItems='center'
          spacing={4}
          rowSpacing={4}
        >
          {data.launchesPast.map((launch) => (
            <Grid key={launch.id} item xs={12} sm={6} md={4} lg={3} xl={3}>
              <Launch
                title={launch.mission_name}
                details={launch.details}
                image={launch.links.flickr_images}
                id={launch.rocket.rocket.id}
              />
            </Grid>
          ))}
        </Grid>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button style={{ textAlign: 'center' }} onClick={clickHandler}>
          Load MORE
        </button>
      </div>
    </>
  );
};

export default Launches;
