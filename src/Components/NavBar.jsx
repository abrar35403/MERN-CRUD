import styled from '@emotion/styled'
import { AppBar } from '@mui/material'
import Toolbar from '@mui/material/Toolbar'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Header =styled(AppBar)`
 background: #111111
`
const Tabs=styled(NavLink)`
    font-size : 20px;
    margin-right:20px;
    color : inherit;
    text-decoration: None;
`





const NavBar = () => {
  return (
    
    <div>
        <Header position="static">
            <Toolbar>
                
                <Tabs to="#">code for interview</Tabs>
                <Tabs to="#">All User</Tabs>
                <Tabs to="/">Add User</Tabs>
            </Toolbar>
        </Header>
    </div>
    
  )
}

export default NavBar