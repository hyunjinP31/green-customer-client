import React, { useState } from 'react';
import { Table, TableBody, TableRow, TableCell} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'antd/dist/antd.css';

const JoinForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        userpass: '',
        userpassck: '',
        userphone: '',
        userorg: '',
        usermail: ''
    })
    const onChange = (e)=>{
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }
    //폼 submit이벤트 
    const onSubmitch = (e) => {
        //form에 원래 연결된 이벤트를 제거
        e.preventDefault();
        //전화번호가 숫자인지 체크하기
        if(isNaN(formData.userphone)){
            alert("전화번호는 숫자만 입력해주세요");
        }
        //input에 값이 있는지 체크하고 
        //입력이 다되어있으면 post전송 
        if(formData.username !== "" && formData.userpass !== "" && 
        formData.userpassck !== "" && formData.userphone !== "" && 
        formData.userorg !== "" && formData.usermail !== ""){
            addMember();
        }
    }
    function addMember() {
        axios.post(`http://localhost:3001/join`,formData)
        .then(res=>{
            navigate('/');
        })
        .catch(e=>{
            console.log(e)
        })
    }
    return (
        <div>
            <h2>신규 고객 등록하기</h2>
            <form onSubmit={onSubmitch}>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell>이름</TableCell>
                            <TableCell>
                                <input name="username" type="text" 
                                value={formData.username} 
                                onChange={onChange}/>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>비밀번호</TableCell>
                            <TableCell>
                                <input name="userpass" type="text" 
                                value={formData.userpass} 
                                onChange={onChange}/>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>비밀번호체크</TableCell>
                            <TableCell>
                                <input name="userpassck" type="text" 
                                value={formData.userpassck} 
                                onChange={onChange}/>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>연락처</TableCell>
                            <TableCell>
                                <input name="userphone" type="text" 
                                value={formData.userphone} 
                                onChange={onChange}/>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>이메일</TableCell>
                            <TableCell>
                                <input name="usermail" type="text" 
                                value={formData.usermail} 
                                onChange={onChange}/>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>소속</TableCell>
                            <TableCell>
                                <input name="userorg" type="text" 
                                value={formData.userorg} 
                                onChange={onChange}/>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={2}>
                                <button type="submit">등록</button>
                                <button type="reset">취소</button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </form>
        </div>
    );
};

export default JoinForm;