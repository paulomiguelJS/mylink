import "./link-item.css";
import { FiX, FiClipboard } from "react-icons/fi";

function LinkItem({closeModal, content}) {

    async function copyLink() {
      await navigator.clipboard.writeText(content.link)
    }
    
  return (
    <div className="modal-container">
      <div className="modal-header">
        <h2>Shortened link</h2>
        <button onClick={closeModal}>
          <FiX size={28} color="#000" />
        </button>
      </div>

      <span>
        {content.long_url}
      </span>

      <button className="modal-link" onClick={copyLink}>
        {content.link}
        <FiClipboard className="icon" size={20} color="#fff" />
      </button>
    </div>
  );
}

export default LinkItem;
