import {FiLink} from 'react-icons/fi'
import Menu from '../../components/Menu'
import './home.css'

function Home() {
    return (
      <div className="container-home">
        <div className="logo">
          <img src="./logo.svg" alt="" />
          <h1>My Link</h1>
          <span>Paste your link to shorten</span>
        </div>

        <div className="area-input">
          <div>
              <FiLink size={24} color="#fff" backgroundColor="transparent"  />
              <input placeholder='Paste your link here' />
          </div>
          <button>Generate Link</button>
        </div>
        <Menu />
      </div>
    );
  }
  
  export default Home;
  