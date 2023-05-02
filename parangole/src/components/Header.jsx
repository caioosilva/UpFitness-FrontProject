import Menu from './Menu';
import './Header.css';

export default function Header() {
  return (
    <header className='header'>
      <div className='container'>
        <h1>Home</h1>
        <Menu />
      </div>
    </header>
  );
}