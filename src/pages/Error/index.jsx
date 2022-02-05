import './error.css'
import {Link} from 'react-router-dom'

function Error() {
    return (
      <div className='container-error'>
          <img src="/notfound.svg" alt="Page not found" />
          <h1>Page not found!</h1>
          <Link to="/">Return to home page</Link>
      </div>
    );
  }
  
  export default Error;
  