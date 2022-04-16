import React from "react";
import ReactDOM from "react-dom";
import '../css/overlay.css';


function Modal({children}) {
  return ReactDOM.createPortal(
    <div className="overlay">
      {children}
    </div>,
    document.getElementById('modal')
  )
}

export {Modal}