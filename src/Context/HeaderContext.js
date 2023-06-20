import React from 'react'

const HeaderContext = React.createContext({
    active:"Home",
    setActiveState: () => {},
})

export default  HeaderContext