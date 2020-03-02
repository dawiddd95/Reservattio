import styled from 'styled-components';
import {Layout} from 'antd';

const { Header, Content, Footer, Sider } = Layout;

export const StyledLayout = styled(Layout)`
   background-color: #f0f2f5;
   min-height: 100vh;

   .ant-layout-content {
      margin: 24px;
   }
`

export const SiderWrapper = styled.div`
   .ant-layout-sider {
      min-height: 100vh;
      height: 100%;
      border-right-color: rgb(232, 232, 232);
      border-right-width: 1px;
      border-right-style: solid;
   }

   .ant-menu-inline {
      border: 0;
   }
`;

export const Logo = styled.div`
   height: 32px;
   margin: 16px;
   background: rgba(255, 255, 255, 0.2);
`

export const H2 = styled.h2`
   text-align: center;
   display: ${({hide}) => hide ? 'none' : 'block'}
`


export const StyledHeader = styled(Header)`
   background: #fff;
   padding: 0;
   border-bottom: 1px solid #e9e9e9;
   display: flex;
   justify-content: space-between;


   .user-dropdown {
      padding: 0 24px;
      cursor: pointer;
      display: inline-block;
      transition: all 0.3s;
      height: 100%;
      > i {
         vertical-align: middle;
         color: @text-color;
      }
      &:hover {
         background: rgba(0, 0, 0, 0.025);
      }
      :global(&.ant-popover-open) {
         background: rgba(0, 0, 0, 0.025);
      }
   }
   .user-dropdown-avatar {
      margin: 20px 8px 20px 0;
      vertical-align: top;
   }
   @media (max-width: 576px) {
      .user-dropdown-text {
         display: none;
      }
   }
   .trigger {
      font-size: 20px;
      line-height: 64px;
      padding: 0 24px;
      cursor: pointer;
      transition: color 0.3s;
      &:hover {
         color: var(--primary-color);
      }
   }
`;