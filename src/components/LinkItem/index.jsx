import "./link-item.css";
import { FiX, FiClipboard } from "react-icons/fi";

function LinkItem({closeModal}) {
  return (
    <div className="modal-container">
      <div className="modal-header">
        <h2>Shortened link</h2>
        <button onClick={closeModal}>
          <FiX size={28} color="#000" />
        </button>
      </div>

      <span>www.paulomiguel.blues</span>

      <button className="modal-link">
        https://bit.ly/12900
        <FiClipboard className="icon" size={20} color="#fff" />
      </button>
    </div>
  );
}

export default LinkItem;
