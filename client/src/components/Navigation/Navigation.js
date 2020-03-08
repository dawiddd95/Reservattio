import React from 'react';
import {Menu} from 'antd';
import {UserOutlined, TeamOutlined, FieldTimeOutlined, CopyOutlined, TagOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom';

import * as S from './StyledNavigation';

const Navigation = () => {
   const iconStyle = {'fontSize': '18px'}

   return (  
      <S.StyledMenu theme="light" mode="inline" >
         <Menu.Item key="1" className='menu-item'>
            <Link to='/user/employees'>
               <UserOutlined style={iconStyle} />
               <S.Span>Employees</S.Span>    
            </Link>               
         </Menu.Item>
         <Menu.Item key="2" className='menu-item'>
            <Link to='/user/clients'>
               <TeamOutlined style={iconStyle} />
               <S.Span>Clients</S.Span>
            </Link>               
         </Menu.Item>
         <Menu.Item key="3" className='menu-item'>
            <Link to='/user/reservations'>
               <FieldTimeOutlined style={iconStyle} />
               <S.Span>Reservations</S.Span>
            </Link>               
         </Menu.Item>
         <Menu.Item key="4" className='menu-item'>
            <Link to='/user/services'>
               <TagOutlined style={iconStyle} />
               <S.Span>Services</S.Span>
            </Link>               
         </Menu.Item>
         <Menu.Item key="5" className='menu-item'>
            <Link to='/user/audit'>
               <CopyOutlined style={iconStyle} />
               <S.Span>Audit Logs</S.Span>
            </Link>               
         </Menu.Item>
      </S.StyledMenu> 
   );
}
 
export default Navigation;