import React from 'react'
import Navigation from './Navigation'

const ThemeLayout = ({children}) => {
    return (
        <>
            {/* navigation */}
            <Navigation />
            {children}
        </>
    )
}

export default ThemeLayout