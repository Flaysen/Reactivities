import React, {} from 'react'
import { Menu, Container, Button } from 'semantic-ui-react'
import { observer } from 'mobx-react-lite';
import { Link, NavLink } from 'react-router-dom';

const NavBar: React.FC = () => {
    return (
        <Menu fixed ='top' inverted>
            <Container>
                <Menu.Item header as={NavLink} exact to='/'>
                    <img src="/assets/logo.png" alt="logo" style={{marginRight: '10px'}}/> 
                    Reactivities  
                </Menu.Item>            
                <Menu.Item name='Activities' as={NavLink} to='/activities'/>               
                <Menu.Item>
                    <Button
                    as={Link} to='/createActivity'
                    positive content='Create Ativity'
                     />
                </Menu.Item>
            </Container>                         
        </Menu>
    );          
};

export default observer(NavBar);