import React from "react";
import ReactDOM from "react-dom"

function Loading({children}) {
  return ReactDOM.createPortal(
    <div className="overlay">
      {children}
    </div>,
    document.getElementById('loading')
  )
}

export {Loading}