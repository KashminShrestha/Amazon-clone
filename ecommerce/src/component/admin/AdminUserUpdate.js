import Navbar from "../Navbar";
import AdminSidebar from "./AdminSidebar";
import Footer from "../Footer";
import { singleuserdetail, updateuser } from "../../api/adminApi";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AdminUserUpdate = () => {
    let [email, setEmail] = useState('');
    let [username, setUsername] = useState('')
    let [success, setSuccess] = useState("");
    let [error, setError] = useState("");
    let { id } = useParams()

    useEffect(() => {
        singleuserdetail(id)
            .then((data) => {
                if (data.err) {
                    setError(data.err);
                    setSuccess("");
                } else {
                    setEmail(data.email);
                    setUsername(data.username);
                    // console.log(data)
                }
            });
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
        updateuser(id, email, username).then((data) => {
            if (data.err) {
                setError(data.err);
                setSuccess("");
            } else {
                setSuccess(true);
                setError("");
            }
        });
    };
    const showerror = () => {
        if (error) {
            return <div className="alert alert-danger">{error}</div>;
        }
    };

    const showsuccess = () => {
        if (success) {
            return (
                <div className="alert alert-success">User updated Successfully</div>
            );
        }
    };
    return (
        <>
            <Navbar />
            {showerror()}
            {showsuccess()}
            <div className="container-fluid">


                <div className="row">
                    <div className="col-3">
                        <AdminSidebar users />
                    </div>
                    <div className="col-9">
                        <form
                            action=""
                            className="w-50 text-center m-auto  border border-2 p-5 mt-5 border-primary"
                        >
                            <h1>UPDATE USER</h1>
                            <input
                                type="text"
                                className="form-control"
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                                value={email}
                            />


                            <input
                                type="text"
                                className="form-control"
                                onChange={(e) => {
                                    setUsername(e.target.value);
                                }}
                                value={username}
                            />
                            <button onClick={handleSubmit} className="btn btn-primary mt-1">
                                Update
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default AdminUserUpdate;