import React from 'react'
import {Navigate, useLocation} from "react-router-dom"

function PrivateRoute({children}) {
  const user = false
  const location = useLocation()
  if(!user){
    return <Navigate to="/auth/login" replace={true} state={{
        return_url: location.pathname
    }} />
  }

  return children

}

export default PrivateRoute
