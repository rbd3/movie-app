import '../assets/menu.styles.js';
import { Outlet } from 'react-router-dom';
import { FaMicrophone, FaSun } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Header, Logo, LogoTitle, LogoImage, Nav, Container } from '../assets/menu.styles';

const Menu = () => {
    return (
      <>
        <Header>
          <Logo>
            <LogoImage src="src/assets/cinema.jpg" alt="logo" />
            <LogoTitle>Movie App</LogoTitle>
          </Logo>
  
          <Nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/MovieGenres">Favorites</Link></li>
            </ul>
          </Nav>
  
          <Container>
            <ul>
              <li data-testid="microphone-icon"><FaMicrophone /></li>
              <li data-testid="sun-icon"><FaSun /></li>
            </ul>
          </Container>
        </Header>
        <Outlet />
      </>
    );
  };
  
  export default Menu;