import React from 'react';
import { Table, Tag } from 'antd';

import * as S from './StyledReservationsTable';

const columns = [
	{ title: 'Name', dataIndex: 'name', key: 'name' },
	{ title: 'Age', dataIndex: 'age', key: 'age' },
	{ title: 'Address', dataIndex: 'address', key: 'address' },
	{ title: 'Tags', key: 'tags', dataIndex: 'tags' },
	{ title: 'Action', key: 'action' },
];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

const ReservationsTable = () => {
   return (  
      <S.Wrapper>
         <Table columns={columns} dataSource={data} />
      </S.Wrapper>
   );
}
 
export default ReservationsTable;