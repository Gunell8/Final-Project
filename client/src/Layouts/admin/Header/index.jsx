import React from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
const AdminHeader = () => {
    const navigate=useNavigate()
  return (
    <div>
      <div id="admin-header">
        <div className="header">
          <div className="header-body">
            <div className="settings">
              <div className="setting">
              </div>
            <div className="btn">
              <button onClick={()=>navigate("/")}>
                <i className="fa-solid fa-right-to-bracket"></i>
                GO TO SITE
              </button>
            </div>
            </div>

          </div>
        </div>

      
      </div>
    </div>
  );
};

export default AdminHeader;
