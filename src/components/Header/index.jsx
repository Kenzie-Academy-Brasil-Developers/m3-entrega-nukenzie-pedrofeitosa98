import logoLight from './logo-light-mode.svg';
import './style.css';

function Header({setLogin}) {
  return (
    <div className='header__container fadeInDown'>
      <nav>
        <img src={logoLight} alt="Logo NuKenzie" />
        <button className="button--nav" onClick={() => setLogin(false)}>Início</button>
      </nav>
    </div>
  )
}

export default Header