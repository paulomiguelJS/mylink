import './menu.css'
import {BsYoutube, BsInstagram} from 'react-icons/bs'
import { Link } from 'react-router-dom';

function Menu() {
    return (
      <div >
          <div className="menu">
            <a className='social' href='#'>
              <BsInstagram color='#fff' size={24}/>
            </a>
            <a className='social' href='#'>
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
  