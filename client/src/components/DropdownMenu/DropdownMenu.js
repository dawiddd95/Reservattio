import React from 'react';
import { Menu, Dropdown, Divider } from 'antd';
import { Link, Redirect } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';

import * as S from './StyledDropdownMenu';

const useDropdownMenu = () => {
   const dispatch = useDispatch()
   const [redirect, setRedirect] = React.useState(false)

   const logout = () => {
      dispatch({type: 'RESET_STORE'})
      sessionStorage.removeItem('session')
      setRedirect(true)
   }

   return [redirect, logout]
}


const DropdownMenu = () => {
   const [redirect, logout] = useDropdownMenu()
   const {name, surname} = useSelector(state => state.accountReducer.account)

   return (
      <>
         {redirect && <Redirect to='/auth/login' />}
         <Dropdown 
            overlay={  
               <Menu>
                  <Menu.Item>
                     <Link to='/user/profile'>
                        <UserOutlined />
                        <S.Span>Profile</S.Span>
                     </Link>
                  </Menu.Item>
                  <Divider 
                     style={{'margin': '5px 0'}} 
                  />
                  <Menu.Item onClick={logout}>
                     <LogoutOutlined />
                     Logout
                  </Menu.Item>
               </Menu>
            } 
            placement="bottomCenter"
         >
            <S.Wrapper>
               <S.Img></S.Img>
               {name} {surname}
            </S.Wrapper>
         </Dropdown>
      </>
   )
}

export default DropdownMenu;