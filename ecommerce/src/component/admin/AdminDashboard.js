import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import AdminSidebar from "./AdminSidebar";

const AdminDashboard = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <AdminSidebar />
          </div>
          <div className="col-9">
            <h1>Welcome to Dashboard</h1>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AdminDashboard;
