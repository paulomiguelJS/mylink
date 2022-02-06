import {useState, useEffect} from 'react'
import "./links.css";
import { FiArrowLeft, FiLink, FiTrash } from "react-icons/fi";
import { Link } from "react-router-dom";

import { getLinksSave, deleteLink} from '../../services/storeLinks'
import LinkItem from '../../components/LinkItem';

function Links() {

  const [myLinks, setMyLinks] = useState([])
  const [data,setData] = useState({})
  const [showModal, setShowModal] = useState(false)
  const [emptyList, setEmptyList] = useState(false)

  useEffect(() => {
    async function getLinks(){
      const result = await getLinksSave('@shortenLink')

      if(result.length === 0) {
        setEmptyList(true)
      }

      setMyLinks(result)
    }
    getLinks()
  }, [])

  function handleOpenLink(link) {
    setData(link)
    setShowModal(true)
  }

  async function handleDelete(id){
    const result = await deleteLink(myLinks, id)

    if(result.length === 0){
      setEmptyList(true)
    }
    setMyLinks(result)
  }

  return (
    <div className="links-container">
      <div className="links-header">
        <Link to="/">
          <FiArrowLeft size={38} color="#fff" />
        </Link>
        <h1>My Links</h1>
      </div>

      {emptyList && (
        <div className='links-Item'>
          <h2 className='empty-text'> Your link list is empty!</h2> 
          </div>
      )}

      {myLinks.map( link => (
        <div key={link.id} className="links-item">
        <button className="link" onClick={() => handleOpenLink(link)}>
          <FiLink size={18} color="#fff" />
          {link.long_url}
        </button>

        <button className="link-delete" onClick={ () => handleDelete(link.id)}>
          <FiTrash size={24} color="#FF5454" />
        </button>
      </div>
      ))}
      
      {showModal && (
        <LinkItem closeModal={() => setShowModal(false)}
        content={data} />
      )}
    </div>
  );
}

export default Links;
