// Preloader.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Preloader = ({ show, onHide }) => {
  return (
    <div className={`modal fade ${show ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: show ? 'block' : 'none' }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Login</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={onHide}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              {/* Login form inputs */}
              <input type="text" className="form-control mb-2" placeholder="Username" />
              <input type="password" className="form-control mb-2" placeholder="Password" />
              <button type="submit" className="btn btn-primary">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
