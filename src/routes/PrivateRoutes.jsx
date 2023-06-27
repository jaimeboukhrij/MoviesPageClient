import { useContext } from "react"
import { AuthContext } from "./../contexts/auth.context"
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {

    const { user, isLoading } = useContext(AuthContext)

    if (isLoading) {
        return <p>loader...</p>
    }

    if (!user) {
        return <Navigate to="/" />
    }

    return <Outlet />
}

export default PrivateRoute