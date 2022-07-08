import React from 'react';
import { TableBody, TableCell, Table, TableRow } from '@mui/material';
import axios from 'axios';
import useAsync from './useAsync/useAsync';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Button } from 'antd';
import 'antd/dist/antd.css';

const getCustomer = async (no)=>{
    const response = await axios.get(`http://localhost:3001/customers/${no}`);
    return response.data;
}

const DetailCustomer = () => {
    const navigate = useNavigate();
    const { no } = useParams();
    const [state] = useAsync(()=> getCustomer(no), [no]);
    const { loading, error, data } = state;
    if(loading) return <div>로딩중</div>;
    if(error) return <div>에러발생</div>;
    if(!data) return <div>로딩중</div>;
    const customer = data;
    //삭제하기
    const customerDel = ()=>{
        axios.delete(`http://localhost:3001/delCustomers/${no}`)
        .then(result=>{
            console.log("삭제되었습니다.");
        })
        .catch(e=>{
            console.log(e);
        })
        navigate("/")
    }
    return (
        <div>
            <h1>고객 상세 정보</h1>
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell>고객명</TableCell>
                        <TableCell>{customer.name}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>연락처</TableCell>
                        <TableCell>{customer.phone}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>생년월일</TableCell>
                        <TableCell>{customer.birth}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>성별</TableCell>
                        <TableCell>{customer.gender}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>주소</TableCell>
                        <TableCell>{customer.add1+"  "+customer.add2}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={2}>
                            <Button onClick={customerDel}>삭제</Button>
                            <Button><Link to={`/updateCustomers/${customer.no}`}>수정</Link></Button>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            
        </div>
    );
};

export default DetailCustomer;