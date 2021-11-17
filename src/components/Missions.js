import { useQuery, gql } from '@apollo/client';

import { Grid } from '@mui/material';
import Mission from './Mission/Mission';
import Button from './Button/Button';

const GET_ALL_MISSIONS = gql`
  query Feed($offset: Int, $limit: Int) {
    launchesPast(limit: $limit, offset: $offset) {
      id
      mission_name
      details
      launch_date_local
      links {
        flickr_images
      }
    }
  }
`;

const Missions = () => {
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
      <h1 style={{ textAlign: 'center', color: 'white' }}>Past Launches</h1>
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
            <Mission
              title={launch.mission_name}
              details={launch.details}
              image={launch.links.flickr_images}
              id={launch.id}
            />
          </Grid>
        ))}
      </Grid>
      <div
        style={{
          paddingTop: '30px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Button onClick={clickHandler}>Load more</Button>
      </div>
    </>
  );
};

export default Missions;
