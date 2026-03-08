import { Navigate } from 'react-router-dom'
import { AuthContext } from '../AuthContext/AuthContext'
import { useContext } from 'react'


const ProtectedRoutes = ({children,allowedRoles})=> {
 const {role,isAuthorized}=useContext(AuthContext);

 if (!role || !isAuthorized === false) {
    return <Navigate to="/login"/>
 }
 if (!allowedRoles.includes(role)) {
    return <Navigate to="/Unauthorized"/>
 }
 return children
}

export default ProtectedRoutes
