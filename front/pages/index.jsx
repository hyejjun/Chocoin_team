import React from 'react'
import RootProvider from '../Providers/rootProvider'
import Login_form from '../components/user/login_form'

const index = () => {
    return (
        <>
        <RootProvider>
            Hello Next !
        </RootProvider>
        <Login_form></Login_form>
        </>
    )
}

export default index