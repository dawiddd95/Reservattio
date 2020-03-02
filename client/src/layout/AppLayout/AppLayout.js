import React from 'react';
import {Layout} from 'antd';
import {MenuUnfoldOutlined, MenuFoldOutlined} from '@ant-design/icons';

import * as S from './StyledAppLayout'

import Navigation from '../../components/Navigation/Navigation';
import AppRoutes from '../../routes/AppRoutes';


const useLayout = () => {
   const [collapsed, setCollapsed] = React.useState(false)

   const collapseMenuToggle = () => {
      setCollapsed(!collapsed)
   }

   return [collapsed, collapseMenuToggle]; 
}


const AppLayout = () => {
   const [collapsed, collapseMenuToggle] = useLayout();

   return (
      <S.StyledLayout>
         <S.SiderWrapper>
            <Layout.Sider theme="light" trigger={null} collapsible collapsed={collapsed} >
               <S.Logo>
                  <S.H2 hide={collapsed}> 
                     Reservattio
                  </S.H2>
               </S.Logo>
               <Navigation />
            </Layout.Sider>
         </S.SiderWrapper>
         <Layout>
            <S.StyledHeader>
               {collapsed 
                  ? <MenuUnfoldOutlined className='trigger' onClick={collapseMenuToggle}/> 
                  : <MenuFoldOutlined className='trigger' onClick={collapseMenuToggle}/>
               }
               {/* Tutaj dac komponent tego dropdown */}
            </S.StyledHeader>
            <AppRoutes />
         </Layout>
      </S.StyledLayout>
   )
}
 
export default AppLayout;