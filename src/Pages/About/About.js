import { useQuery, gql } from '@apollo/client';
import Layout from '../../components/layout/Layout';
import styles from './About.module.scss';

const GET_ABOUT = gql`
  {
    company {
      ceo
      employees
      founder
      headquarters {
        state
        city
        address
      }
      name
      summary
    }
  }
`;
const About = () => {
  const { loading, error, data } = useQuery(GET_ABOUT);

  if (loading) {
    return (
      <Layout>
        <p>Loading</p>
      </Layout>
    );
  }
  if (error) {
    console.log(error);
    return <p>Error :(</p>;
  }

  return (
    <Layout>
      <div className={styles.about}>
        <h2>{data.company.name}</h2>
        <p>{data.company.summary}</p>
        <h3>Founder: {data.company.founder}</h3>
        <h3>Ceo: {data.company.ceo}</h3>
        <h4>
          Headquarters: {data.company.headquarters.address},{' '}
          {data.company.headquarters.city} - {data.company.headquarters.state}
        </h4>
        <h4>Employees: {data.company.employees}</h4>
      </div>
    </Layout>
  );
};

export default About;
