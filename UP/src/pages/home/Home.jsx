import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Hero from './hero';

export default function Home() {
  return (
    <>
      <Header />


      <Link
        style={{
          position: 'fixed',
          top: '12px',
          left: '50%',
          transform: 'translate3d(-50%, 0, 0)',
          background: '#555',
          color: '#fff',
          padding: '12px 24px',
          textDecoration: 'none',
          zIndex: '10',
        }}
        to="/perfil"
      >
        Perfil
      </Link>

      <Hero />
    </>
  );
}