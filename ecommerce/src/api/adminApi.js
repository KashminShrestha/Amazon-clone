export const addCategory = (category_name, token) => {
    let category = { category_name };
    return fetch(`http://localhost:5000/category/addcategory`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(category),
    })
        .then((res) => {
            return res.json();
        })
        .catch((err) => {
            console.log(err);
        });
};

export const getcategory = () => {
    return fetch(`http://localhost:5000/category/getcategory`)
        .then((res) => {
            return res.json();
        })
        .catch((err) => {
            console.log(err);
        });
};

export const getcategorydetail = (id) => {
    return fetch(`http://localhost:5000/category/getcategorydetail/${id}`)
        .then((res) => {
            return res.json();
        })
        .catch((err) => {
            console.log(err);
        });
};

export const updatecategory = (id, category_name) => {
    let category = { category_name };
    return fetch(`http://localhost:5000/category/updatecategory/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(category),
    })
        .then((res) => {
            return res.json();
        })
        .catch((err) => {
            console.log(err);
        });
};

export const deletecategory = (id) => {
    return fetch(`http://localhost:5000/category/deletecategory/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
    })
        .then((res) => {
            return res.json();
        })
        .catch((err) => {
            console.log(err);
        });
};

export const getProduct = () => {
    return fetch(`http://localhost:5000/product/getproduct`)
        .then((res) => {
            return res.json();
        })
        .catch((err) => {
            console.log(err);
        });
};

export const deleteProduct = (id) => {
    return fetch(`http://localhost:5000/product/deleteproduct/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
    })
        .then((res) => {
            return res.json();
        })
        .catch((err) => {
            console.log(err);
        });
};

export const addProduct = (product) => {
    return fetch(`http://localhost:5000/product/addproduct`, {
        method: "POST",
        body: product,
    })
        .then((res) => {
            return res.json();
        })
        .catch((err) => {
            console.log(err);
        });
};

export const getproductdetail = (id) => {
    return fetch(`http://localhost:5000/product/getproductdetail/${id}`)
        .then((res) => {
            return res.json();
        })
        .catch((err) => {
            console.log(err);
        });
};

export const updateproduct = (id, product) => {
    return fetch(`http://localhost:5000/product/updateproduct/${id}`, {
        method: "PUT",
        body: product,
    })
        .then((res) => {
            return res.json();
        })
        .catch((err) => {
            console.log(err);
        });
};

export const getuser = () => {
    return fetch(`http://localhost:5000/user/getuser`)
        .then((res) => {
            return res.json();
        })
        .catch((err) => {
            console.log(err);
        });
};




export const deleteuser = (id) => {
    return fetch(`http://localhost:5000/user/deleteuser/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
    })
        .then((res) => {
            return res.json();
        })
        .catch((err) => {
            console.log(err);

        })

};
export const singleuserdetail = (id) => {
    return fetch(`http://localhost:5000/user/singleuserdetail/${id}`)
        .then((res) => {
            return res.json();
        })
        .catch((err) => {
            console.log(err);
        });
};

export const updateuser = (id, email, username) => {
    let user = { email, username };
    return fetch(`http://localhost:5000/user/updateuser/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    })
        .then((res) => {
            return res.json();
        })
        .catch((err) => {
            console.log(err);
        });
};

export const getallproduct = () => {
    return fetch(`http://localhost:5000/product/getproduct`)
        .then(res => res.json())
        .catch(err => console.log(err))
};