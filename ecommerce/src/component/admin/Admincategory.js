import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import AdminSidebar from "./AdminSidebar";
import Footer from "../Footer";
import { deletecategory, getcategory } from "../../api/adminApi";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const Admincategory = () => {
    let [categories, setCategories] = useState([]);
    let [error, setError] = useState("");
    let [success, setSuccess] = useState("");

    useEffect(() => {
        getcategory().then((data) => {
            if (data.err) {
                setError(data.err);
            } else {
                setCategories(data);
            }
        });
    }, []);

    const handleDelete = (id) => (e) => {
        e.preventDefault();
        swal("Are you sure you want to delete", {
            buttons: {
                cancel: "Go Back!!",
                catch: {
                    text: "Delete",
                    value: "catch",
                },
                Cancle: true,
            },
        }).then((value) => {
            switch (value) {
                case "Cancle":
                    swal("Delete Unsuccessfull");
                    break;

                case "catch":
                    swal("Gotcha!", "Delete Successfull", "success");
                    deletecategory(id).then((data) => {
                        if (data.error) {
                            setError(data.error);
                        } else {
                            setSuccess(data.success);
                            window.location.reload(false);
                        }
                    });
                    break;

                default:
                    swal("Delete Unsuccessfull", "danger");
            }
        });
    };
    const showError = () => {
        if (error) {
            return <div className="alert alert-danger">{error}</div>;
        }
    };
    const showSuccess = () => {
        if (success) {
            return <div className="alert alert-success">{success}</div>;
        }
    };

    return (
        <>
            <Navbar />
            {showError()}
            {showSuccess()}
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3">
                        <AdminSidebar category />
                    </div>
                    <div className="col-9">
                        <h1>Category</h1>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Category_name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {categories &&
                                    categories.map((v, i) => {
                                        return (
                                            <tr>
                                                <td>{i + 1}</td>
                                                <td>{v.category_name}</td>
                                                <td>
                                                    <Link to={`/admin/category/updatecategory/${v._id}`}>
                                                        <button className="btn btn-primary">Update</button>
                                                    </Link>

                                                    <button
                                                        className="btn btn-danger"
                                                        onClick={handleDelete(v._id)}
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                            </tbody>
                        </table>
                        <Link to="/admin/addcategory">Add New Category</Link>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Admincategory;
