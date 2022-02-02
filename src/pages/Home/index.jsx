import {FiLink} from 'react-icons/fi'

function Home() {
    return (
      <div className="continer-home">
        <div className="logo">
          <img src="./logo.svg" alt="" />
          <h1>My Link</h1>
          <span>Paste your link to shorten</span>
        </div>
        <div className="area-input">
          <div>
              <FiLink size={24} color="#fff" />
              <input placeholder='Paste your link here' />
          </div>
          <button>Generate Link</button>
        </div>
      </div>
    );
  }
  
  export default Home;
  