import React, { useEffect, useRef, useState } from "react";
import Navbar from "../Navbar";
import AdminSidebar from "./AdminSidebar";
import Footer from "../Footer";
import { addProduct, getcategory } from "../../api/adminApi";

const Addproduct = () => {
    let [categories, setCategories] = useState([]);
    let [product, setProduct] = useState({
        product_name: "",
        product_price: "",
        product_description: "",
        count_in_stock: "",
        product_image: "",
        category: "",
        rating: "",
        error: "",
        success: false,
        formdata: "",
    });
    let sel_ref = useRef()
    let file_ref = useRef()
    const {
        product_name,
        product_price,
        product_description,
        count_in_stock,
        rating,
        error,
        success,
        formdata,
    } = product;

    useEffect(() => {
        getcategory().then((data) => {
            if (data) {
                setCategories(data);
            }
        });
        setProduct({ ...product, formdata: new FormData() });
    }, []);
    const handleChange = (name1) => (e) => {
        let value;
        if (name1 === "product_image") {
            value = e.target.files[0];
        } else {
            value = e.target.value;
        }
        setProduct({ ...product, [name1]: value });
        formdata.set(name1, value);
        console.log(formdata);
    };
    const handleSubmit = (e) => {
        e.preventDefault()
        addProduct(formdata)
            .then(data => {
                if (data.error) {
                    setProduct({ ...product, error: data.error, success: false })
                }
                else {
                    setProduct({
                        success: true,
                        product_name: '',
                        product_price: '',
                        product_description: '',
                        count_in_stock: '',
                        formdata: new FormData(),
                        rating: '',
                        product_image: '',
                        category: '',
                        error: '',
                    })
                    sel_ref.current.value = ''
                    file_ref.current.value = ''

                    window.location.reload()

                }
            })

    }
    const showerror = () => {
        if (error) {
            return <div className="alert alert-danger">{error}</div>
        }

    }
    const showsuccess = () => {
        if (success) {
            return <div className="alert alert-success">Product Added Successfully</div>
        }

    }


    return (
        <>

            <Navbar />
            {
                showerror()
            }
            {
                showsuccess()
            }
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3">
                        <AdminSidebar product />
                    </div>
                    <div className="col-9">
                        <form
                            action=""
                            className="w-50 text-center m-auto  border border-2 p-5 mt-5 border-primary"
                        >
                            <h1>ADD NEW PRODUCT</h1>
                            <label htmlFor="pname">Product Name</label>
                            <input
                                type="text"
                                id="pname"
                                value={product_name}
                                className="form-control"
                                onChange={handleChange("product_name")}
                            />
                            <label htmlFor="pprice">Product Price</label>
                            <input
                                type="number"
                                id="pprice"
                                value={product_price}
                                className="form-control"
                                onChange={handleChange("product_price")}
                            />
                            <label htmlFor="pdes">Product Description</label>
                            <textarea
                                type="text"
                                id="pdes"
                                value={product_description}
                                className="form-control"
                                rows={5}
                                onChange={handleChange("product_description")}
                            />
                            <label htmlFor="pq">Product Quantities</label>
                            <input
                                type="number"
                                id="pq"
                                value={count_in_stock}
                                className="form-control"
                                onChange={handleChange("count_in_stock")}
                            />
                            <label htmlFor="pr">Product Rating</label>
                            <input
                                type="number"
                                id="pr"
                                value={rating}
                                className="form-control"
                                onChange={handleChange("rating")}
                            />
                            <label htmlFor="pi">Product Image</label>
                            <input
                                type="file"
                                id="pi"
                                className="form-control"
                                onChange={handleChange("product_image")}
                                ref={file_ref}
                            />
                            <label htmlFor="cat">Catagories</label>
                            <select
                                className="form-control"
                                onChange={handleChange("category")}
                                ref={sel_ref}
                            >
                                <option value="" disabled selected style={{ color: 'gray' }}>
                                    Choose Category
                                </option>
                                {categories &&
                                    categories.map((c, i) => {
                                        return (
                                            <option value={c._id} key={c._id} className="form-control">
                                                {c.category_name}
                                            </option>
                                        );
                                    })}
                            </select>
                            <button onClick={handleSubmit} className='btn btn-primary mt-1'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Addproduct;
