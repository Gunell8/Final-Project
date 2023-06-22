import React from "react";
import { Outlet } from "react-router-dom";
import AdminHeader from "../../../Layouts/admin/Header";

const AdminRoot = () => {
  return (
    <div>
      <AdminHeader />
      <Outlet />
    </div>
  );
};

export default AdminRoot;
