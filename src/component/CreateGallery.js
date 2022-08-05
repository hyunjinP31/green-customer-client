import axios from 'axios';
import React, { useState } from 'react';
import './GalleryStyle.css';
import { Table, TableBody, TableRow, TableCell } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import 'antd/dist/antd.css';
import { getCookie } from '../util/cookie';

const CreateGallery = () => {
    const navigate = useNavigate();
    const umail = getCookie('usermail');
    const [ formData, setformData] = useState({
        imgurl: "",
        title: "",
        desc: "",
        usermail: umail
    });
    const onChange = (e) => {
        const { name, value } = e.target;
        setformData({
            ...formData,
            [name]: value
        })
    }
    const onChangeImage = (e) => {
        const { name } = e.target;
        const imageFormData = new FormData();
        //인풋의 files 배열 0번째에 해당 파일이 담김 그걸 폼에 넣어줌
        imageFormData.append(name, e.target.files[0]);
        axios.post('http://localhost:3001/upload', imageFormData, {
            //image 파일 전송시에 지정해야 함
            Headers: { 'content-type': 'multipart/form-data' },
        }).then(res => {
            // setUploadImg(res.data.imageUrl);
            setformData({
                ...formData,
                imgurl: res.data.imageUrl
            })
        }).catch(e => {
            console.log(e);
        })
    }
    const onSubmitch = e => {
        e.preventDefault();
        axios.post(`http://localhost:3001/gallery`, formData)
        .then(res=>{
            alert('등록되었습니다.');
            navigate('/');
        })
        .catch(e=>{
            console.log(e);
        })
    }
    return (
        <div>
            <h2>이미지 게시글 등록하기</h2>
            <form onSubmit={onSubmitch}>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell>이메일</TableCell>
                            <TableCell>
                                <input name="usermail" type="text"
                                    value={formData.usermail}
                                    onChange={onChange} readOnly/>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>이미지보기</TableCell>
                            <TableCell>
                                <div className='imgDiv'>
                                    <div className='imgbox'></div>
                                    <input type='file' className='imginput' name='img' onChange={onChangeImage} />
                                    {
                                        formData.imgurl && <img src={`http://localhost:3001/upload/${formData.imgurl}`} alt="" className='imgView' />
                                    }
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>제목</TableCell>
                            <TableCell>
                                <input name="title" type="text"
                                    value={formData.title}
                                    onChange={onChange} />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>내용</TableCell>
                            <TableCell>
                                <input name="desc" type="text"
                                    value={formData.desc}
                                    onChange={onChange} />
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

export default CreateGallery;