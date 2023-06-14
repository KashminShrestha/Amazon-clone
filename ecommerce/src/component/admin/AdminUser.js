import React, { useEffect, useState } from 'react'
import AdminSidebar from './AdminSidebar'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { deleteuser, getuser } from '../../api/adminApi'
import swal from 'sweetalert'
import { Link } from 'react-router-dom'

const AdminUser = () => {
    let [user, setUser] = useState([])
    let [error, setError] = useState('')
    let [success, setSuccess] = useState('')

    useEffect(() => {
        getuser()
            .then(data => {
                if (data.err) {
                    setError(data.err)
                }
                else {
                    setUser(data)
                }
            })
    })
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
                    deleteuser(id).then((data) => {
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

                <div className='row'>
                    <div className='col-3'>
                        <AdminSidebar users />

                    </div>
                    <div className='col-9'>
                        <h1>Users</h1>
                        <table className='table table-bordered'>
                            <thead>
                                <tr>
                                    <th>S.no</th>
                                    <th>Username</th>
                                    <th>Email</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    user && user.map((u, i) => {
                                        return <tr key={i}>
                                            <td>{i + 1}</td>
                                            <td>{u.username}</td>
                                            <td>{u.email}</td>
                                            <td>
                                                <Link to={`/admin/user/updateuser/${u._id}`}>
                                                    <button className="btn btn-primary">Update</button>
                                                </Link>
                                                <button className='btn btn-danger' onClick={handleDelete(u._id)}>Delete</button>

                                            </td>

                                        </tr>
                                    })
                                }

                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}

export default AdminUser