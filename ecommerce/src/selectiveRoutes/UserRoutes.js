import React from 'react'
import { isAuthenticated } from '../api/userApi'
import { Navigate, Outlet } from 'react-router-dom'

const UserRoutes = () => {
    return (
        <>
            {
                (isAuthenticated() && isAuthenticated().user.role === 0) ? <Outlet /> : <Navigate to={'/signin'} />
            }
        </>
    )
}

export default UserRoutes