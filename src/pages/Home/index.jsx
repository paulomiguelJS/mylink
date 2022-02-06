import { useState } from 'react';
import {FiLink} from 'react-icons/fi'
import './home.css'

import Menu from '../../components/Menu'
import LinkItem from '../../components/LinkItem'

import api from '../../services/api'
import {saveLink} from '../../services/storeLinks'


function Home() {

  const [link, setLink] = useState('')
  const [data, setData] = useState({})
  const [showModal, setShowModal] = useState(false)

  async function handleShortLink () {
    try{
      const response = await api.post('/shorten',{
        long_url: link
      })

      setData(response.data)
      setShowModal(true)

      saveLink('@shortenLink', response.data )
      setLink('')

    } catch {
      alert("Something went wrong, try again!")
      setLink('')
    }

  }

    return (
      <div className="container-home">
        <div className="logo">
          <img src="./logo.svg" alt="" />
          <h1>My Link</h1>
          <span>Paste your link to shorten</span>
        </div>

        <div className="area-input">
          <div>
              <FiLink size={24} color="#fff" backgroundcolor="transparent"  />
              <input 
              placeholder='Paste your link here' 
              value={link}
              onChange={(e)=> setLink(e.target.value)}/>
          </div>
          <button onClick={handleShortLink}>Generate Link</button>
        </div>
        <Menu />

        {showModal && (
          <LinkItem 
          closeModal={() => setShowModal(false)}
          content={data} />
        )}
      </div>
    );
  }
  
  export default Home;
    