import React from 'react';

const useFetch = () => {
   
}


const ClientsTable = () => {
   return (  
      <S.Wrapper>
         <Table columns={columns} dataSource={data} />
      </S.Wrapper>
   );
}
 
export default ClientsTable;