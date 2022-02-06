import './menu.css'
import {BsInstagram} from 'react-icons/bs'
import { Link } from 'react-router-dom';

function Menu() {
    return (
      <div >
          <div className="menu">
            <a className='social' href='https://www.paulomiguel.dev/'>
              <BsInstagram color='#fff' size={24}/>
            </a>
            <a className='social' href='https://www.paulomiguel.dev/'>
              <BsInstagram color='#fff' size={24}/>
            </a>
            <Link className='menu-item' to='/links'>
              My Links
            </Link>
          </div>
      </div>
    );
  }
  
  export default Menu;
  