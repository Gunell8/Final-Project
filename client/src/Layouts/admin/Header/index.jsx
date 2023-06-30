import React from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
const AdminHeader = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
      <div id="admin-header">
        <div className="header">
          <div className="header-body">
            {users?.user?.isAdmin && (
              <h3>{users.user.firstName + " " + users.user.lastName}</h3>
            )}
            <div className="settings">
              <div className="setting">
                <div className="user-profile">
                  {users?.user?.isAdmin == true ? (
                    <img src={users.user?.image} alt="" />
                  ) : (
                    <i className="fa-solid fa-user"></i>
                  )}
                </div>
              </div>
              <div className="btn">
                <button onClick={() => navigate("/")}>
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
