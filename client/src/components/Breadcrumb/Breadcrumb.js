import React from 'react';
import {Breadcrumb as AntdBreadcrumb} from 'antd';
import {Link} from 'react-router-dom';

import * as S from './StyledBreadcrumb';

const Breadcrumb = ({links, text}) => {
   return (  
      <S.Wrapper>
         <AntdBreadcrumb>
            {links.map((breadcrumb, index) => 
               <AntdBreadcrumb.Item key={index}>
                  <Link to={breadcrumb.to}>
                     {breadcrumb.label}
                  </Link>
               </AntdBreadcrumb.Item>
            )}
            <AntdBreadcrumb.Item>
               {text}
            </AntdBreadcrumb.Item>
         </AntdBreadcrumb>
      </S.Wrapper>
   );
}
 
export default Breadcrumb;