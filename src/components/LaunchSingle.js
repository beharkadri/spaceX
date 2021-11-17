import { useQuery, gql } from '@apollo/client';
import { useLocation } from 'react-router';

const GET_ROCKET = gql`
  query Rocket($rocketName: ID!) {
    rocket(id: $rocketName) {
      id
      country
      description
      name
      stages
      diameter {
        meters
      }
      height {
        meters
      }
      cost_per_launch
      mass {
        kg
      }
      engines {
        type
        version
        layout
        propellant_1
        propellant_2
      }
    }
  }
`;

const LaunchSingle = () => {
  const { pathname } = useLocation();
  //console.log(rocketID.split('/')[1]);
  const rocketID = pathname.split('/')[2];
  const { loading, error, data } = useQuery(GET_ROCKET, {
    variables: { rocketName: rocketID },
  });

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.log(error);
    return <p>Error :(</p>;
  }

  console.log(data);

  return (
    <>
      <h1>{data.rocket.name}</h1>
      <p>{data.rocket.description}</p>
    </>
  );
};

export default LaunchSingle;
