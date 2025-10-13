export default function Modal({ id, header, body, footer, onClose }) {
  return (
    <div id={id || "Modal"} className="modal">
      <div className="modal-content">
        <div className="header">
          <h2>{header ? header : "placeholder for header"}</h2>
          <span className="close-modal-icon" onClick={onClose}>
            &times;
          </span>
        </div>
        <div className="body">{body ? body : "placeholder for body"}</div>
        <div className="footer">{footer ? footer : <h3>placeholder for footer</h3>}</div>
      </div>
    </div>
  );
}
