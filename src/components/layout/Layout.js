import Header from './Header/Header';
import Footer from './Footer/Footer';
import Container from '../Container/Container';
const Layout = ({ children }) => (
  <Container>
    <Header />

    <main>{children}</main>

    <Footer />
  </Container>
);

export default Layout;
