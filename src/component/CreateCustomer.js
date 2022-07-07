import React, { useState } from 'react';
import { Table, TableCell, TableRow, TableBody} from '@mui/material';
import  PopupDom from './PopupDom';
import  PopupPostCode  from './PopupPostCode'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const CreateCustomer = () => {
    const navigate = useNavigate();
    //우편번호 관리하기
    const onAddData = (data) =>{
        setFormData({
            ...formData,
            add1: data.address,
        })
    }
    //팝업창 상태관리
    const [ isPopupOpen, setIsPopupOpen ] = useState(false);
    //팝업창 상태 true로 변경
    const openPostCode =()=>{
        setIsPopupOpen(true);
    }
    //팝업창 상태 false로 변경
    const closePostCode= ()=>{
        setIsPopupOpen(false);
    }
    const [formData, setFormData ] = useState({
        name: "",
        phone: "",
        birth: "",
        gender: "",
        add1: "",
        add2: "",
    });
    const onChange = (e)=>{
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name] : value,
        })
    }
    //폼 submit 이벤트
    const onSubmit = (e)=>{
        //form에 원래 있던 이벤트 제거
        e.preventDefault();
        //input에 값이 있는 지 체크하고 입력이 다 되어있으면 post 전송
        if(!formData.name || !formData.phone || !formData.birth || !formData.gender || !formData.add1 || !formData.add2) return alert("모든 필드를 입력해주세요");
        insertCustomer();
        navigate('/');
    }
    function insertCustomer(){
        axios.post(`http://localhost:3001/customers`,{
            name: formData.name,
            phone: formData.phone,
            birth: formData.birth,
            gender: formData.gender,
            add1: formData.add1,
            add2: formData.add2
        }).then(result=>{
                console.log(result);
            })
            .catch(e=>{
                console.log(e);
            })
    }
    return (
        <div>
            <h1>신규 고객 등록하기</h1>
            <form name='customerUpload' onSubmit={onSubmit}>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell>이름</TableCell>
                            <TableCell>
                                <input type="text" name='name' value={formData.name} onChange={onChange} />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>연락처</TableCell>
                            <TableCell>
                                <input type="text" name='phone' value={formData.phone} onChange={onChange} />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>생년월일</TableCell>
                            <TableCell>
                                <input type="date" name='birth' value={formData.birth} onChange={onChange} />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>성별</TableCell>
                            <TableCell>
                                여성<input type="radio" name='gender' value="여성" onChange={onChange} />
                                남성<input type="radio" name='gender' value="남성" onChange={onChange} />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>주소</TableCell>
                            <TableCell>
                                <input type="text" name='add1' value={formData.add1} onChange={onChange} />
                                <input type="text" name='add2' value={formData.add2} onChange={onChange} />
                                <button type="button" onClick={openPostCode}>우편번호검색</button>
                                <div id='popupDom'>
                                    {isPopupOpen &&(
                                        <PopupDom>
                                            <PopupPostCode onClose={closePostCode} onAddData={onAddData}/>
                                        </PopupDom>
                                    )}
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={2}>
                                <button type='submit'>등록</button>
                                <button type='reset'>취소</button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </form>
        </div>
    );
};

export default CreateCustomer;