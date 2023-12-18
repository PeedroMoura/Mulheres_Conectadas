import React from 'react'
import { Container } from '../SideBarItem/styles'

const SidebarItem = ({ Icon, Text }) => {
    return (
        <Container>
            <Icon />
            {Text}
        </Container>
    )
}

export default SidebarItem
