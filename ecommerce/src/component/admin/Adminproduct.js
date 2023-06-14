import React, { useEffect, useState } from "react";
import AdminSidebar from "./AdminSidebar";
import { deleteProduct, getProduct } from "../../api/adminApi";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const Adminproduct = () => {
    const [product, setProduct] = useState([]);
    let [error, setError] = useState("");
    let [success, setSuccess] = useState("");

    useEffect(() => {
        getProduct().then((data) => {
            if (data.err) {
                setError(data.err);
            } else {
                setProduct(data);
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
                    deleteProduct(id).then((data) => {
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
            {showError()}
            {showSuccess()}
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3">
                        <AdminSidebar product />
                    </div>
                    <div className="col-9">
                        <h1>Products</h1>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>S.no</th>
                                    <th>Product Name</th>
                                    <th>Product Image</th>
                                    <th>Product Price</th>
                                    <th>Product Quantity</th>
                                    <th>Product Rating</th>
                                    <th>Product Description</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {product &&
                                    product.map((v, i) => {
                                        return (
                                            <tr>
                                                <td key={v._id}>{i + 1}</td>
                                                <td>{v.product_name}</td>
                                                <td>
                                                    <img
                                                        src={`http://localhost:5000/${v.product_image}`}
                                                        width={100}

                                                        alt=""
                                                    />
                                                </td>
                                                <td>Rs.{v.product_price}</td>
                                                <td>{v.count_in_stock}</td>
                                                <td>{v.rating}</td>
                                                <td>{v.product_description}</td>
                                                <td>
                                                    <Link to={`/admin/updateproduct/${v._id}`}>
                                                        {" "}
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
                        <Link to="/admin/addproduct" className="text-decoration-none">
                            <h5>Add Product</h5>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Adminproduct;
