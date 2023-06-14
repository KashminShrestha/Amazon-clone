import React from 'react'
import { isAuthenticated } from '../api/userApi'
import { Navigate, Outlet } from 'react-router-dom'

const AdminRoutes = () => {
    return (
        <>
            {
                (isAuthenticated() && isAuthenticated().user.role === 1) ? <Outlet /> : <Navigate to={'/signin'} />
            }
        </>
    )
}

export default AdminRoutes