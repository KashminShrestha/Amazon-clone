export const userRegister = (username, email, password) => {
    let user = { username, password, email };
    return fetch(`http://localhost:5000/user/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    })
        .then((res) => {
            return res.json();
        })
        .catch((error) => {
            console.log(error);
        });
};
export const emailverification = (token) => {
    return fetch(`http://localhost:5000/user/verification/${token}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((res) => {
            return res.json();
        })
        .catch((error) => {
            console.log(error);
        });
};

export const forgetPassword = (email) => {
    let user = { email };
    return fetch(`http://localhost:5000/user/forgetpassword`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    })
        .then((res) => {
            return res.json();
        })
        .catch((error) => {
            console.log(error);
        });
};
export const resetPassword = (password, token) => {
    let user = { password };
    return fetch(`http://localhost:5000/user/resetpassword/${token}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    })
        .then((res) => {
            return res.json();
        })
        .catch((error) => {
            console.log(error);
        });
};

export const signin = (email, password) => {
    let user = { password, email };
    return fetch(`http://localhost:5000/user/signin`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    })
        .then((res) => {
            return res.json();
        })
        .catch((error) => {
            console.log(error);
        });
};

export const authenticate = (data) => {
    localStorage.setItem("jwt", JSON.stringify(data));
};

//to check if the user is signed in or not

export const isAuthenticated = () => {
    if (localStorage.getItem("jwt")) {
        return JSON.parse(localStorage.getItem("jwt"));
    } else {
        return false;
    }
};

export const signout = () => {
    localStorage.removeItem("jwt");
    return fetch(`http://localhost:5000/user/signout`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((res) => {
            return res.json();
        })
        .catch((error) => {
            console.log(error);
        });
};
