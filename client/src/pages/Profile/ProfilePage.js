import React from 'react';

import * as S from './StyledProfilePage';

import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import ProfileForm from '../../components/Profile/ProfileForm/ProfileForm';

const ProfilePage = () => {
   return (  
      <S.Wrapper>
         <Breadcrumb 
            links={[
               {to: '/user/profile', label: 'Home'}
            ]}
            text='Profile'
         />
         <S.StyledCard title='Profile' bordered>
            <ProfileForm />
         </S.StyledCard>
      </S.Wrapper>
   );
}
 
export default ProfilePage;