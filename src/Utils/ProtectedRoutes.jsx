import { Navigate } from 'react-router-dom'
import { AuthContext } from '../AuthContext/AuthContext'
import { useContext } from 'react'


const ProtectedRoutes = ({children,allowedRoles})=> {
 const {role,isAuthorized}=useContext(AuthContext);

//  a front end does not get the current role and the it is not authorized the user must go to the  login page

 if (!role || !isAuthorized) {
    return <Navigate to="/login"/>
 }
//  in allowedroles which come from app.jsx include the current role is not matched then the user must go into unauthorized page
 if (!allowedRoles.includes(role)) {
    return <Navigate to="/unauthorized"/>
 }
 return children
}

export default ProtectedRoutes
