import React from 'react';
import { Table, TableBody, TableHead, TableCell, TableRow } from '@mui/material';
import Customer from './Customer';
import axios from 'axios';
import useAsync from './useAsync/useAsync';

const getCustomer = async ()=>{
    const response = await axios.get('http://localhost:3001/customers');
    return response.data;
}

const CustomerList = ({ customers }) => {
    const [state, refetch] = useAsync(getCustomer,[]);
    const { loading, error, data } = state;
    if(loading) return <div>로딩중...</div>;
    if(error) return <div>에러발생</div>;
    if(!data) return <div>로딩중입니다.</div>
    return (
        <div>
            <h2>고객리스트</h2>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>번호</TableCell>
                        <TableCell>이름</TableCell>
                        <TableCell>연락처</TableCell>
                        <TableCell>생년월일</TableCell>
                        <TableCell>성별</TableCell>
                        <TableCell>주소</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map(customer=>
                        <Customer key={customer.no} customer={customer} />
                        )}
                </TableBody>
            </Table>
        </div>
    );
};

export default CustomerList;