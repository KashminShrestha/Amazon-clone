import React, { useState } from 'react'
import { userRegister } from '../api/userApi'

const Register1 = () => {
    let [username, setUsername] = useState('')
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [error, setError] = useState('')
    let [success, setSuccess] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault()
        userRegister(username, email, password)
            .then(data => {
                if (data.error) {
                    setError(data.error)
                    setSuccess(false)

                }
                else {
                    setSuccess(true)
                    setError('')
                }
            })

    }
    const showError = () => {
        if (error) {
            return <div className='alert alert-danger'>{error}</div>
        }
    }
    const showSuccess = () => {
        if (success) {
            return <div className='alert alert-success'>User Register Successfully</div>
        }
    }
    return (
        <>
            {
                showSuccess()
            }
            {
                showError()
            }
            <div class="container-fluid mt-5 mb-5 text-center custom-signin">
                <form class="form-signin w-25 m-auto border border-4 rounded-5 border-primary" >
                    <img class="mb-4 rounded-5" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
                    <h1 class="h3 mb-3 font-weight-normal">Please Register</h1>
                    <label for="inputEmail" class="sr-only">Username</label>
                    <input type="text" id="inputUsername" class="form-control" placeholder="Username" name="name" onChange={e => setUsername(e.target.value)} />
                    <label for="inputEmail" class="sr-only">Email address</label>
                    <input type="email" id="inputEmail" class="form-control" placeholder="Email address" name="Email" onChange={e => setEmail(e.target.value)} />
                    <label for="inputPassword" class="sr-only">Password</label>
                    <input type="password" id="inputPassword" class="form-control" placeholder="Password" name="Password" onChange={e => setPassword(e.target.value)} />
                    <div class="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me" /> Remember me
                        </label>
                    </div>
                    <button class="btn btn-lg btn-primary btn-block" type="submit" onClick={handleSubmit}>Register</button>
                    <p class="mt-5 mb-3 text-muted">© 2017-2018</p>
                </form>
            </div>
        </>
    )
}

export default Register1