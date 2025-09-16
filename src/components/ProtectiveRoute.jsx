import React, { Children } from 'react'
import { Navigate } from 'react-router-dom'
import { UserAuth } from './context/AuthContext'


const ProtectiveRoute = () => {
    const {user} = UserAuth()
    if(!user){
        return <Navigate to='/'></Navigate>
    } else {
        return Children
    }
}

export default ProtectiveRoute